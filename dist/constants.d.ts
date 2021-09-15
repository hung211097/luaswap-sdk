import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42,
    TOMOCHAIN_DEVNET = 99,
    TOMOCHAIN_TESTNET = 89,
    TOMOCHAIN_MAINNET = 88,
    FACCHAIN = 1997
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0x7d3f09a40a93acad98f16e56237ba6187ee0ab68";
export declare const INIT_CODE_HASH = "0x9020c8b9967def5c9eb8e0391a89bed501b113aa0435f7022a02d36b3d82a51d";
export declare const TOMO_FACTORY_ADDRESS = "0x28c79368257CD71A122409330ad2bEBA7277a396";
export declare const TOMO_INIT_CODE_HASH = "0xdb97fca50f04565472504aea8301c967285be031e5bdd131140734c3759d7015";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _995: JSBI;
export declare const _996: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
