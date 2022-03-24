import TOKEN_HOLDERS from '../assets/whitelist-tokens/holders.json';

export { TOKEN_HOLDERS };

export const TESTING_MODE = false;

export const DISCORD_URL = "https://discord.com/";
export const TWITTER_URL = "https://twitter.com/metarelics";
export const OPENSEA_URL = ""; // TODO
export const LOOKSRARE_URL = ""; // TODO
export const INSTAGRAM_URL = "https://www.instagram.com/metarelics/";
export const PRINTS_URL = "https://www.metarelics.co/";
export const RELICS_URL = ""; // https://metarelics.xyz
export const IKONICK_TWITTER_URL = "https://twitter.com/TeamIKONICK";
export const IKONICK_INSTAGRAM_URL = "https://www.instagram.com/ikonick/";

const MAINNET_CONTRACT_ADDRESS = '';
const TESTNET_CONTRACT_ADDRESS = '0x725513782c88455a09ff143590588a6a3a253ffc';

export const CONTRACT_ADDRESS = TESTING_MODE ? TESTNET_CONTRACT_ADDRESS : MAINNET_CONTRACT_ADDRESS;
export const WHITELIST_PRICE = TESTING_MODE ? 0 : 0.2;
export const WHITELIST_LIMIT = 1;
export const REGULAR_PRICE = TESTING_MODE ? 0 : 0.2;
export const REGULAR_LIMIT = 2;
export const MAX_MINT = 2323;

export const MINT_TIME = TESTING_MODE
    ? Date.now() + 5000
    : 1648234800000;