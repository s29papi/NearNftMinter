import { CONTRACT_NAME, config } from "./config";
import * as nearAPI from "near-api-js";


const { connect, Contract, keyStores, WalletConnection } = nearAPI;
const addKeystore = { keyStore: new keyStores.BrowserLocalStorageKeyStore() };
const nearConfig = Object.assign(addKeystore, config );


export async function initContract() {
    const near = await connect(nearConfig);

    // Initializing Wallet based Account. It can work with NEAR testnet wallet that
    // is hosted at https://wallet.testnet.near.org
     window.walletConnection = new WalletConnection(near);
 
    // Getting the Account ID. If still unauthorized, it's just empty string
     window.accountId = window.walletConnection.getAccountId();
 
    // Initializing our contract APIs by contract name and configuration
    window.contract = await new Contract(window.walletConnection.account(), CONTRACT_NAME, {
      // View methods are read only. They don't modify the state, but usually return some value.
     viewMethods: ['nft_tokens_for_owner'],
     // Change methods can modify the state. But you don't receive the returned value when called.
     changeMethods: ['nft_mint'],
    });
}


export function logout() {
    window.walletConnection.signOut();
    // reload page
    window.location.replace(window.location.origin + window.location.pathname);
}

export function login() {
    // Allow the current app to make calls to the specified contract on the
    // user's behalf.
    // This works by creating a new access key for the user's account and storing
    // the private key in localStorage.
    window.walletConnection.requestSignIn(CONTRACT_NAME);
}
