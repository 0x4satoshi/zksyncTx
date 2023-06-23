
//使用zksync的API读取交易条数
const zksync = require('zksync');
const ethers = require('ethers');

async function getTransactionCount() {
  const provider = await zksync.getDefaultProvider('rinkeby');
  const ethersProvider = new ethers.providers.JsonRpcProvider('https://rinkeby.infura.io/v3/your-infura-project-id');
  const syncWallet = await zksync.Wallet.fromEthSigner(new ethers.Wallet('your-private-key', ethersProvider), provider);
  const count = await syncWallet.getTransactionsCount();
  console.log(count);
}

getTransactionCount();





const zksync = require('zksync');
const ethers = require('ethers');

async function getLastTransactionTime() {
  const provider = await zksync.getDefaultProvider('rinkeby');
  const ethersProvider = new ethers.providers.JsonRpcProvider('https://rinkeby.infura.io/v3/your-infura-project-id');
  const syncWallet = await zksync.Wallet.fromEthSigner(new ethers.Wallet('your-private-key', ethersProvider), provider);
  const transactions = await syncWallet.getTransactions();
  const lastTransaction = transactions[transactions.length - 1];
  console.log(lastTransaction.timestamp);
}

getLastTransactionTime();



