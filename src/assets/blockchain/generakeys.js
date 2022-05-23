const EC = require('elliptic').ec;

const ec = new EC('secp256k1');

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log();
console.log('tu clave publica es (direccion de tu waller)\n', publicKey);

console.log();
console.log('Tu clave privada (Mantela secreta muy importante)\n', privateKey);
