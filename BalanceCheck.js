const readline = require('readline');
const Web3 = require('web3');

const web3 = new Web3("Add your Url here");
// Generate you url from quicknode or infura this url will help us to connect to an Ethereum node



const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  

  const balances = async () => {
    const address = await promptInput('Enter the address: ');
  
    try {
      const balance = web3.utils.fromWei(await web3.eth.getBalance(address), 'ether');
      console.log(`The balance of ${address} is: ${balance} ETH.`);
    } catch (error) {
      console.error('Error retrieving balance:', error);
    } finally {
      r2.close();
    }
  };
  
  const promptInput = (question) => {
    return new Promise((resolve) => {
      r2.question(question, (answer) => {
        resolve(answer);
      });
    });
  };
  
  balances();
