require("@nomicfoundation/hardhat-toolbox");

module.exports = {
    solidity: "0.8.19",
    networks: {
        swisstronik: {
            url: "https://json-rpc.testnet.swisstronik.com/", //URL of the RPC node for Swisstronik.
            accounts: ["0xe5971b47dba658b567bcb9263043f8566c6110a1443a2808269edacf43108a73"], //Your private key starting with "0x" 
            //Make sure you have enough funds in this wallet to deploy the smart contract
        },
    },
};