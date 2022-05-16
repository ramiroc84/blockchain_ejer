const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

console.log(bitcoin);

// const prevBlockHash = 'prev624f85aa3dcc145a665e245fba02bdd1';
// const currentBlockData = [
//   { amount: 10, sender: 'aaaa', recipient: 'bbbb' },
//   { amount: 30, sender: 'cccc', recipient: 'dddd' },
//   { amount: 1000, sender: 'eeee', recipient: 'ffff' },
// ];

// bitcoin.proofOfWork(prevBlockHash, currentBlockData, 6);

// console.log(
//   bitcoin.hashBlock(prevBlockHash, currentBlockData, nonce)
// );

// bitcoin.createNewBlock(
//   892348,
//   'prev624f85aa3dcc145a665e245fba02bdd1',
//   'hashf1ed604072fc6b778199bbebf44c3e6'
// );

// bitcoin.createNewBlock(
//   1118,
//   'prev624f85aa3dcc145a665e245',
//   'hashf1ed604072fc6b778199bbebf'
// );

// bitcoin.createNewTransaction(100, 'ALEX78199bbebf', 'JEN78199bbebf');
// bitcoin.createNewTransaction(400, 'JANE78199bbebf', 'JEN78199bbebf');
// bitcoin.createNewTransaction(500, 'BILL78199bbebf', 'JEN78199bbebf');

bitcoin.createNewBlock(
  666754,
  'prev624f85aa3dcc145a665e245fba0',
  'hashf1ed604072fc6b778199bbebf4'
);

console.log(bitcoin);
