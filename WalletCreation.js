const Web3API = require('web3');


const myFunction = () => {

  const web3 = new Web3API(new Web3API.providers.HttpProvider('https://mainnet.infura.io'));

  let newAccount = web3.eth.accounts.create(web3.utils.randomHex(32));
  let newWallet = web3.eth.accounts.wallet.add(newAccount);
  let newKeystore = newWallet.encrypt(web3.utils.randomHex(32));

  console.log({
    newAccount: newAccount,
    newWallet: newWallet,
    newKeystore: newKeystore
  });
};
myFunction();
