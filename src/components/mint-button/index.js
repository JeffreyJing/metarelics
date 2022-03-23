import { useState, useContext, useEffect } from 'react';
import { CONTRACT_ADDRESS, MAX_MINT, REGULAR_LIMIT, REGULAR_MINT_TIME, REGULAR_PRICE, WHITELIST_LIMIT, WHITELIST_MINT_TIME, WHITELIST_PRICE } from '../../constants';
import { Web3Context } from '../../context/web3-context';
import { generateMerkleProof, isUserWhitelisted } from '../../utils/merkle';
import nftAbi from '../../assets/abis/nft-abi.json';
import './index.css';

const MINT_STATE = {
	DISABLED: 'DISABLED',
	WHITELIST: 'WHITELIST',
	REGULAR: 'REGULAR'
}

export const MintNowButton = () => {
	const { connect, connected, disconnect, web3, address } = useContext(Web3Context);
	const [mintState, setMintState] = useState(MINT_STATE.DISABLED);
	const [error, setError] = useState(undefined);
	const [purchasing, setPurchasing] = useState(false);
	const [mintSuccess, setMintSuccess] = useState(undefined);
	const [totalMintedCount, setTotalMintedCount] = useState(undefined);
	const [userTotalMintedCount, setUserTotalMintedCount] = useState(undefined);
	const [userMintSize, setUserMintSize] = useState(undefined);
	const [isUserInWhitelist, setIsUserInWhitelist] = useState(false);
	const [isSecondSale, setIsSecondSale] = useState(false);
	const [isBackupSale, setIsBackupSale] = useState(false);

	/**
	 * This hook is in control of setting the total mint counter and user mint counter.
	 * 
	 * It runs a function every second to get the updated state from the contract.
	 */
	 useEffect(() => {
		let messageShowed = false;
		// console.log(generateMerkleProof(address));
		let mintCounterInterval = setInterval(async () => {
			console.log("CONNECTED", connected);
			if (connected) {
				try {
					const nftContract = createContract();
					const totalSupply = await nftContract.methods.totalSupply().call();
					setTotalMintedCount(Number(totalSupply) - 1);	// -1 for +1 indexing
					const userBalance = await nftContract.methods.balanceOf(address).call();
					setUserTotalMintedCount(Number(userBalance));

					const _isSecondarySale = await nftContract.methods.isSecondSale().call();
					const _isBackupSale = await nftContract.methods.isBackupSale().call();

					setIsBackupSale(_isBackupSale);
					setIsSecondSale(_isSecondarySale);

					const isPaused = await nftContract.methods.paused().call();

					// const isBeforeMintTime = Date.now() < MINT_TIME;

					setMintState(
						isPaused
							? MINT_STATE.DISABLED
							: MINT_STATE.WHITELIST
					);
				} catch(e) {
					// Ideally should never get here so long as MM is connected.
					// setError("There was an error with contacting the contract...");

					console.log("ERROR", e)
				}
			}
		}, 1000);

		return () => {
			if (mintCounterInterval) {
				clearInterval(mintCounterInterval);
			}
		}
	}, [connected, mintState]);

	useEffect(() => {
		console.log("IS USER", isUserWhitelisted('0xee28c503BE63731EfBcEe38835b0A992B90E676a'), isUserWhitelisted('0x7b1319a57e7E8a6e682Ba3534A1047692F047F96'))
		setIsUserInWhitelist(isUserWhitelisted(address));
	}, [connected, address]);

	function createContract() {
		return new web3.eth.Contract(
			nftAbi,
			CONTRACT_ADDRESS,
			{
				from: address
			}
		);
	}

	async function mint() {
		setError(undefined);
		if (
			mintState === MINT_STATE.DISABLED
			|| purchasing
		) {
			return;
		}

		setPurchasing(true);
		setMintSuccess(undefined);
		const nftContract = createContract();
		let merkleProof = [];

		// COMMENT THIS OUT IF MERKLE PROOF IS FAILING
		if (!(isBackupSale || isSecondSale)) {
			try {
				merkleProof = generateMerkleProof(address);
			} catch(e) {
				setError("User is not whitelisted!");
				setPurchasing(false);
				setMintSuccess(undefined);
				return;
			}
		}
		///////////////////////////////////////////////

		const priceToUse = mintState === MINT_STATE.WHITELIST ? WHITELIST_PRICE : REGULAR_PRICE;

		// console.log(countToMint, priceToUse, merkleProof);

		// const est = await pengusContract.methods.mint(web3.utils.toHex(countToMint),
		// merkleProof).estimateGas();
		// console.log(est);
		const gasPrice = await web3.eth.getGasPrice();

		console.log("MERKLE", merkleProof);
		try {
			const tx = {
				from: address,
				to: CONTRACT_ADDRESS,
				value: web3.utils.toWei((/*countToMint * */ priceToUse).toString(), "ether"),
				data: getDataFunction(),
				// gas: `${88000 + (3500 * countToMint)}`,
			};
			const receipt = await web3.eth.sendTransaction(tx);
			setPurchasing(false);
			setError(undefined);
			setMintSuccess({
				count: userMintSize,
				transactionHash: receipt.transactionHash
			});
			setUserMintSize(0);
		} catch(e) {
			setError("There was an error when minting. " + e.message);
			setPurchasing(false);
		}

		function getDataFunction() {
			if (isBackupSale) {
				return nftContract.methods.mint().encodeABI();
			}

			if (isSecondSale) {
				return nftContract.methods.secondaryMint().encodeABI();
			}

			if (mintState === MINT_STATE.WHITELIST) {
				return nftContract.methods.presaleMint(
					web3.utils.toHex(1),
					merkleProof
				).encodeABI();
			}
		}
	}


	let mintText;
	let userMintSupplyMessage;
	switch(mintState) {
		case MINT_STATE.WHITELIST: {
			mintText = 'MINT RELICS PASS';
			userMintSupplyMessage = `You may mint a total of ${WHITELIST_LIMIT} during the whitelist phase.`
			break;
		}
		case MINT_STATE.REGULAR: {
			mintText = 'MINT RELICS PASS';
			userMintSupplyMessage = `You may mint a total of ${REGULAR_LIMIT}!`
			break;
		}
		default: {
			mintText = 'MINT RELICS PASS';
			userMintSupplyMessage = 'You cannot mint at this time.';
			break;
		}
	}

	if (purchasing) {
		mintText = 'Minting...';
	}

	return (
		<div className='mint-overall-container' id='mint'>
			{/* {error && (
				<div className={`mint-msg mint-error`}>
					Error: {error}
				</div>
			)} */}
			
			{mintSuccess && (
				<div className='mint-msg mint-success'>Successfully minted {mintSuccess.size} NFTs! Transaction info: <a href={`https://etherscan.io/tx/${mintSuccess.transactionHash}`} target="_blank" rel="noopener noreferrer">{mintSuccess.transactionHash.substring(0, 9)}...</a></div>
			)}

			{connected && (
				<div className={'mint-button-connected'}>
					<a href='#' onClick={disconnect}>Connected.</a>
					{
						isUserInWhitelist
						? (
							<p>Congrats! You're on the Relics List.</p>
						) : (
							<p>Sorry, you're not on the Relics List.</p>
						)
					}
				</div>
			)}
			
			<button 
				className={`
					mint-button-container
					${connected && mintState === MINT_STATE.DISABLED ? 'mint-disabled' : ''}
					${purchasing ? 'mint-disabled' : ''}
					${connected && !(isSecondSale || isBackupSale) && !isUserInWhitelist ? 'mint-disabled' : ''}
				`} 
				onClick={
					connected
						? mint
						: connect
				}
			>
				{
					connected
						? mintText
						: "Connect Wallet"
				} 
			</button>
			{/* <div className='mint-disconnect'>
				{connected && <a href='#' onClick={disconnect}>Disconnect wallet</a>}
			</div> */}
		</div>
	);
}