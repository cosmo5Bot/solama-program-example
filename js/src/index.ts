import * as web3 from '@solana/web3.js';

async function main() {
    const con = new web3.Connection("https://api.devnet.solana.com", 'singleGossip');
    const account = new web3.Account();
    await con.requestAirdrop(
        account.publicKey,
        web3.LAMPORTS_PER_SOL * 2
    );

    const inst = new web3.TransactionInstruction({
        keys: [],
        programId: new web3.PublicKey("CZUgyTgTymhzaswZV2qLAFfMw856KJCb8WL2bqQQ38RB"),
        data: Buffer.alloc(0),
    });

    console.log("account:", account.publicKey.toBase58());
    await web3.sendAndConfirmTransaction(
        con,
        new web3.Transaction().add(inst),
        [account],
        {
            skipPreflight: true,
            commitment: "singleGossip",
        },
    );
    console.log("end");
}

main();