# to deploy
on host machine
```
sudo docker volume create --name=solana-rust-dapp-sync
sudo docker-sync start
sudo make up
sudo make shell
```

in a container

```
solana config set --url https://api.devnet.solana.com
solana-keygen new
solana-keygen pubkey /root/.config/solana/id.json
solana airdrop 10 <ADDRESS>
cargo build-bpf
solana program deploy /usr/src/app/target/deploy/raybot.so
```

# arch
The flow of a program using this structure looks like this:

- Someone calls the entrypoint
- The entrypoint forwards the arguments to the processor
- The processor asks instruction.rs to decode the instruction_data argument from the entrypoint function.
- Using the decoded data, the processor will now decide which processing function to use to process the request.
- The processor may use state.rs to encode state into or decode the state of an account which has been passed into the entrypoint.