import TOKEN_HOLDERS from '../assets/whitelist-tokens/holders.json';

export { TOKEN_HOLDERS };

export const TESTING_MODE = true;

export const DISCORD_URL = "https://discord.com/";
export const TWITTER_URL = "https://twitter.com/DegeneracyNFT";
export const OPENSEA_URL = "https://opensea.io/";
export const LOOKSRARE_URL = "https://looksrare.org";
export const INSTAGRAM_URL = "https://instagram.com";

const MAINNET_CONTRACT_ADDRESS = '';
const TESTNET_CONTRACT_ADDRESS = '';

export const CONTRACT_ADDRESS = TESTING_MODE ? TESTNET_CONTRACT_ADDRESS : MAINNET_CONTRACT_ADDRESS;
export const WHITELIST_PRICE = 0.05;
export const WHITELIST_LIMIT = 4;
export const REGULAR_PRICE = 0.1;
export const REGULAR_LIMIT = 10;
export const MAX_MINT = 2323;

export const WHITELIST_MINT_TIME = TESTING_MODE
    ? Date.now() + 5000
    : 1638777600000;
export const REGULAR_MINT_TIME = TESTING_MODE
    ? Date.now() + 10000
    : 1638841500000;
