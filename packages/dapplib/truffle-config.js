require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember coast grace open force gas'; 
let testAccounts = [
"0x00d7e4b2d32848087f1be68f6eef8665eb1981d17657ee4e69bea1a27862c774",
"0x5cbd690c24748ac909f4250bf356b5de06810fc650b69ebd38f4bede49ca8a1d",
"0x30dc36964706150e33e24b07db89b8f72438779796f0c9437cff8119aae53217",
"0x9b2b252b5d36e892fb45bff7aa8bf8e1f21164d27b53200147901e2619998704",
"0xa9e45515f38f682df633a66268e47e66d596dcea825de065693f54c35d9ee1e5",
"0x12dae285c8150c427e795756358c0e8d8b40574aa08dee4347ad3961e33b566e",
"0x9b9b53d48a4977e0072ce5539fd0e8e6d6cd7d3883d781964274feb80c30fe9b",
"0x03cf16fe27e51d83d794de369953a72de70e412f4d8163f02d1e4e1339548c3b",
"0x8877288e512ad74a7e5792b1a1098ac38e785296dad7cd034fe7af3ee61827a5",
"0x1612a04bd6d761dfd7e20becfdf2042a22d5f6ac4046bce2af9106ca9f5be44d"
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
            version: '^0.8.0'
        }
    }
};

