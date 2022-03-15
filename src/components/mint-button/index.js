import { useState, useContext, useEffect } from 'react';
import { CONTRACT_ADDRESS, MAX_MINT, REGULAR_LIMIT, REGULAR_MINT_TIME, REGULAR_PRICE, WHITELIST_LIMIT, WHITELIST_MINT_TIME, WHITELIST_PRICE } from '../../constants';
import { Web3Context } from '../../context/web3-context';
import { generateMerkleProof } from '../../utils/merkle';
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

	/**
	 * This hook is in control of setting the total mint counter and user mint counter.
	 * 
	 * It runs a function every second to get the updated state from the contract.
	 */
	 useEffect(() => {
		let messageShowed = false;
		let mintCounterInterval = setInterval(async () => {
			if (connected) {
				try {
					const nftContract = createContract();
					const totalSupply = await nftContract.methods.totalSupply().call();
					setTotalMintedCount(Number(totalSupply) - 1);	// -1 for +1 indexing
					const userBalance = await nftContract.methods.balanceOf(address).call();
					setUserTotalMintedCount(Number(userBalance));

					const isPresale = await nftContract.methods.isPresale().call();
					const isMainSale = await nftContract.methods.isMainSale().call();
					const isPaused = await nftContract.methods.paused().call();

					const isBeforeMintTime = Date.now() < MINT_TIME;

					setMintState(
						isPaused || isBeforeMintTime
							? MINT_STATE.DISABLED
							: isMainSale
								? MINT_STATE.REGULAR
								: isPresale	
									? MINT_STATE.WHITELIST
									: MINT_STATE.DISABLED
					);
				} catch(e) {
					// Ideally should never get here so long as MM is connected.
					// setError("There was an error with contacting the contract...");

					// console.log("ERROR", e)
				}
			}
		}, 1000);

		return () => {
			if (mintCounterInterval) {
				clearInterval(mintCounterInterval);
			}
		}
	}, [connected, mintState]);

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

		if (!userMintSize) {
			setError("You must set your amount to mint!");
			return;
		}
		setPurchasing(true);
		setMintSuccess(undefined);
		const countToMint = userMintSize ?? 0;
		const nftContract = createContract();
		let merkleProof = [];

		// COMMENT THIS OUT IF MERKLE PROOF IS FAILING
		if (mintState === MINT_STATE.WHITELIST) {
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
		try {
			const tx = {
				from: address,
				to: CONTRACT_ADDRESS,
				value: web3.utils.toWei((countToMint * priceToUse).toString(), "ether"),
				data: mintState === MINT_STATE.WHITELIST
					? nftContract.methods.presaleMint(
						web3.utils.toHex(countToMint),
						merkleProof
					).encodeABI()
					: nftContract.methods.mint(
						web3.utils.toHex(countToMint)
					).encodeABI()
				,
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
	}

	let mintText;
	let userMintSupplyMessage;
	switch(mintState) {
		case MINT_STATE.WHITELIST: {
			mintText = 'Whitelist Mint';
			userMintSupplyMessage = `You may mint a total of ${WHITELIST_LIMIT} during the whitelist phase.`
			break;
		}
		case MINT_STATE.REGULAR: {
			mintText = 'Mint now!';
			userMintSupplyMessage = `You may mint a total of ${REGULAR_LIMIT}!`
			break;
		}
		default: {
			mintText = 'WHITELIST MINT';
			userMintSupplyMessage = 'You cannot mint at this time.';
			break;
		}
	}

	if (purchasing) {
		mintText = 'Minting...';
	}

	return (
		<div className='mint-overall-container' id='mint'>
			<h2 className='mint-title'>
				{totalMintedCount ?? 0} / {MAX_MINT}
			</h2>
			{
				mintState !== MINT_STATE.DISABLED && (
					<div className='mint-price'>
						{mintState === MINT_STATE.WHITELIST ? `${WHITELIST_PRICE} ETH` : `${REGULAR_PRICE} ETH`}
					</div>
				)
			}
			{error && (
				<div className={`mint-msg mint-error`}>
					Error: {error}
				</div>
			)}
			{
				connected && (
					<div className='mint-msg'>
						Total supply minted: <span className='mint-accent'>{totalMintedCount ?? 0}/{MAX_MINT}</span>
					</div>
				)
			}
			
			{mintSuccess && (
				<div className='mint-msg mint-success'>Successfully minted {mintSuccess.size} NFTs! Transaction info: <a href={`https://etherscan.io/tx/${mintSuccess.transactionHash}`} target="_blank" rel="noopener noreferrer">{mintSuccess.transactionHash.substring(0, 9)}...</a></div>
			)}
			{
				connected && mintState !== MINT_STATE.DISABLED && (
					<div className='mint-counter'>
						<div className='mint-amount-number'>
							Amount to mint: <span className='mint-accent'>{userMintSize ?? 0}</span>&nbsp;
						</div>
						<button className='mint-counter-button' onClick={() => {
							// if (
							// 	(mintState === MINT_STATE.WHITELIST
							// 		&& (userTotalMintedCount + (userMintSize ?? 0)) < WHITELIST_LIMIT)
							// 	|| (mintState === MINT_STATE.REGULAR
							// 		&& (userTotalMintedCount + (userMintSize ?? 0)) < REGULAR_LIMIT)
							// ) {
								if (!userMintSize || userMintSize < 10) {
									setUserMintSize((userMintSize ?? 0) + 1);
								}
							// }
						}}>+</button>
						<button className='mint-counter-button' onClick={() => {
							if (userMintSize > 0) {
								setUserMintSize(userMintSize - 1);
							}
						}}>–</button>
					</div>
				)
			}
			<button 
				className={`
					mint-button-container
					${connected && mintState === MINT_STATE.DISABLED ? 'mint-disabled' : ''}
					${purchasing ? 'mint-disabled' : ''}
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
			<div className='mint-disconnect'>
				{connected && <a href='#' onClick={disconnect}>Disconnect wallet</a>}
			</div>
		</div>
	);
}