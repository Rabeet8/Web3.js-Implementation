//initializing a web3 

const web3 = new Web3("Add your Url here");

//connecting with contract

const contract = new web3.eth.contract('Your ABI','Contract Address')

//calling a function from a contract
//replace function name with the name of your desired function
contract.methods."functionName()".then(console.log);

//setting value of a variable
//replace 90 with value of your choice
contract.methods.'functionName(90)'.send({"contract address from where you want to send"})
