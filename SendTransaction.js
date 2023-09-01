const readline = require('readline');
const Web3 = require('web3');

const web3 = new Web3("Add your Url here");
// Generate you url from quicknode or infura this url will help us to connect to an Ethereum node


const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function sendTransaction() {
  return new Promise(async (resolve, reject) => {
    r1.question("Enter your address (sender address): ", async (fromAddress) => {
      r1.question("Enter the recipient's address: ", async (toAddress) => {
        r1.question("Enter the amount to send (in Ether): ", async (amount) => {
          r1.close();

          console.log(`Attempting to make a transaction from ${fromAddress} to ${toAddress}`);

          // Create transaction object
          const transaction = {
            from: fromAddress,
            to: toAddress,
            gas: web3.utils.toHex(21000),
            value: web3.utils.toHex(web3.utils.toWei(amount, "ether")),
          };

          try {
            // Sign the transaction
            const signedTx = await web3.eth.accounts.signTransaction(transaction, derivedPrivateKey);

            // Send the signed transaction
            const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

            if (receipt.status) {
              console.log("Transaction hash:", receipt.transactionHash);
              console.log("Success");
              resolve(toAddress);
            } else {
              console.log("Transaction hash:", receipt.transactionHash);
              console.log("Pending");
              reject(new Error("Transaction is pending"));
            }
          } catch (error) {
            console.log("Error:", error);
            reject(error);
          }
        });
      });
    });
  });
}

sendTransaction();
