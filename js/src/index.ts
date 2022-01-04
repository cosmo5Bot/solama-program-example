import * as solanaWeb3 from '@solana/web3.js';

const keypair = solanaWeb3.Keypair.generate();
console.log(keypair);