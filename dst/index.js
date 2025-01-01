"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
require("dotenv/config");
const helpers_1 = require("@solana-developers/helpers");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)("devnet"));
        console.log(`✅ Connected!`);
        const address = new web3_js_1.PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");
        const balance = yield connection.getBalance(address);
        console.log(`The balance of the account at ${address} is ${balance} lamports`);
        const balanceInSol = balance / web3_js_1.LAMPORTS_PER_SOL;
        console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`);
        const keypair = (0, helpers_1.getKeypairFromEnvironment)("SECRET_KEY");
        console.log(`The public key is: `, keypair.publicKey.toBase58());
        console.log(`The secret key is: `, keypair.secretKey);
    });
}
main();
