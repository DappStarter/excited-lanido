require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth ranch column harvest casino slot genius'; 
let testAccounts = [
"0x8d4a5c36e6ce9f054787f6f0c3d1ffd212e88290a5bc4618639946f642a08a99",
"0x7061139d6b661396f36fa2d48f07ed33567dd442afebbe4f922fb4ebc3b5cc45",
"0xfd671ae6acea38719d8825c349424189246d71cc94cd314d45076379f7ca794f",
"0xad9c326416cdf7b197b9d1394f73ddd6fe7e003efdd2833cd1842ebb6e787aab",
"0x656f746ca664379c4b871829656ba6a72a28f8b7f6ecb4570cf125ac676f9ce0",
"0xfa6a1de7893556bbf9a538fefb72f577d0fc9a86b36bdfed8c862b960c62f3fb",
"0xcbac66f959718f44fdb4290ee8261ff2b25d5e951b8335f90fc020f931c9fcf1",
"0xa4e2900bdd6f8377d7c21a8e4747b3dc548c050a73eeed86c9ae5d33017ac5a1",
"0x7f9dc95e2a764e0ba13371eae0fe707778a0bb1acc7fb9dc3ee8437901076633",
"0xd58539283bab3a332995a39d2bf0970d9e0a82d4913f42779c99191ab8c9ba68"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
