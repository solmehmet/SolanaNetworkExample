import {
    Connection,
    PublicKey,
    clusterApiUrl,
    LAMPORTS_PER_SOL
} from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";


async function main() {
    const connection = new Connection(clusterApiUrl("devnet"));
    console.log(`✅ Connected!`);

    const address = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");
    const balance = await connection.getBalance(address);

    console.log(`The balance of the account at ${address} is ${balance} lamports`);

    const balanceInSol = balance / LAMPORTS_PER_SOL;

    console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`);
}

main();