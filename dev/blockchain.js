const CryptoJS = require('crypto-js');

// 4.Blockchain Constructor Function (se puede hacer con clases... )
// Crea instancias de Blockchain
function Blockchain() {
  this.chain = [];
  this.pendingTransactions = []; // Transacciones pendientes. Se validan cuando se crea un nuevo bloque al minarse
  this.createNewBlock(100, '0', '0'); // GENESIS BLOCK: parametros arbitrarios
}

// 5.Create New Block Method
// Crea un bloque nuevo
// Las funciones y los atributos dentro de prototype son comunes a todas las instancias
// Todos los objetos tienen acceso a estos valores y funciones
Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHash,
  hash
) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce, // valor que cambio para llegar al hash requerido (ej '0000xxxxxx') arranca en 0 y va aumentando
    hash,
    previousBlockHash,
  };

  this.pendingTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
};

// 6. Get Las Block Method
// Devuelve el ultimo bloque
Blockchain.prototype.getLastBlock = function () {
  return this.chain[this.chain.length - 1];
};

// 7. Create New Transaction Method
// Crea una nueva transaccion
Blockchain.prototype.createNewTransaction = function (
  amount,
  sender,
  recipient
) {
  const newTransaction = {
    amount,
    sender,
    recipient,
  };

  this.pendingTransactions.push(newTransaction);

  return this.getLastBlock()['index'] + 1; //devuelve el indice del bloque al que la transaccion se añadira
};

// Crea el hash mediante SHA-256
Blockchain.prototype.hashBlock = function (
  prevBlockHash,
  currentBlockData,
  nonce
) {
  const dataAsString =
    prevBlockHash + // string
    nonce.toString() + // nro
    JSON.stringify(currentBlockData); // obj

  // Genera el hash sha256 y lo transforma a hexadecimal
  const hash = CryptoJS.enc.Hex.stringify(
    CryptoJS.SHA256(dataAsString)
  );

  return hash;
};

// Encuentra el valor de nonce que satisface la dificultad
Blockchain.prototype.proofOfWork = function (
  prevBlockHash,
  currentBlockData,
  dificulty
) {
  let nonce = 0;
  let hash = this.hashBlock(prevBlockHash, currentBlockData, nonce);

  while (hash.substring(0, dificulty) !== '0'.repeat(dificulty)) {
    nonce = nonce + 1;
    hash = this.hashBlock(prevBlockHash, currentBlockData, nonce);
    // console.log(nonce, hash);
  }
  console.log('ENCONTRADO');
  console.log(nonce, hash);
  return nonce;
};

module.exports = Blockchain;

/* --------------------------------- CLASES --------------------------------- */
//prueba
// class Blockchain {
//   constructor() {
//     this.chain = [];

//     this.newTransaction = [];
//   }
// }
