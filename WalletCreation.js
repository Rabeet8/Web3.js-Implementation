const { hdkey } = require("ethereumjs-wallet");
const bip39 = require("bip39");


function generateNewSeedPhrase() {
  const strength = 128; // Strength in bits (e.g., 12 words = 128 bits)
  const seedPhrase = bip39.generateMnemonic(strength);
  // const seedPhrase = generateNewSeed();

  // console.log("Seed Phrase Length", seedPhrase.length)
  
  const masterPrivateKey = hdkey.fromMasterSeed(bip39.mnemonicToSeedSync(seedPhrase));
 
  
  
  const wallet = masterPrivateKey.derivePath("m/44'/60'/0'/0/0").getWallet();
  
// console.log("wallet", wallet)
  const derivedPrivateKey = wallet.getPrivateKeyString();

  
  const derivedPublicKey = wallet.getPublicKeyString();
  

  const derivedAddress = wallet.getAddressString();

  
  console.log("Seed Phrase:", seedPhrase);
  console.log("------------------------")
  console.log("Master Private Key", masterPrivateKey)
  console.log("------------------------")
  console.log("Derived Private Key:", derivedPrivateKey);
  console.log("------------------------------------")
  console.log("Derived Public Key:", derivedPublicKey);
  console.log("------------------------------------")
  console.log("Derived Address:", derivedAddress);
  console.log("------------------------------------")
  
  
  
return {
  derivedPrivateKey,
  derivedAddress,
};
}

const { derivedPrivateKey, derivedAddress } = generateNewSeedPhrase();
