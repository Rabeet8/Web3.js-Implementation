const readline = require('readline');
const Web3 = require('web3');

const web3 = new Web3("Add your Url here");
// Generate you url from quicknode or infura this url will help us to connect to an Ethereum node

const WalletAddress = "Place your address"

function monitorTransactions() {
  console.log(`Checking transaction on ${WalletAddress}` )
   const subscription = web3.eth.subscribe('pendingTransactions', (error, result) => {
     if (error) {
       console.error('Error occurred while subscribing to pendingTransactions:', error);
       return; // Stop the function and exit
     }
   });
  
   let transactionDetected = false; // Variable to track if a transaction is detected
 
   subscription.on('data', (txHash) => {
     setTimeout(async () => {
       try {
         const tx = await web3.eth.getTransaction(txHash);
         if (tx != null && tx.to.toLowerCase() === derivedAddress.toLowerCase()) {
          console.log("---------------------------")
           console.log('Transaction detected:');
           console.log('Transaction Hash:', txHash);
           console.log('From:', tx.from);
           console.log('Value:', web3.utils.fromWei(tx.value, 'ether'), 'ETH');
           console.log('Timestamp:', new Date().toString());
           
           transactionDetected = true;
           
           return; // Stop the function and exit
         }
       } catch (error) {
         console.error('Error occurred while fetching transaction:', error);
       }
     }, 60000);
   });
 
//    // Set timeout for 1 minute
   setTimeout(() => {
     if (!transactionDetected) {
       console.log('Time limit has ended. No transaction occurred on the derived address.');
       return; 
     }
   }, 60000); // Set timeout for 1 minute
 }
 
// //  Call the monitorTransactions function
 monitorTransactions();

