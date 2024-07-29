require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0xb6aaaB683445b44AB8579bc285288F88aDb1637D"], //Your private key starting with "0x"
    },
  },
};