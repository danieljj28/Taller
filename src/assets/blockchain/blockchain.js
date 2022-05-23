const SHA256 = require("crypto-js/sha256");

export class Transaccion {
    constructor(vehiculo, taller, tipoConsulta, detalles,marca){
        this.vehiculo = vehiculo;
        this.taller = taller;
        this.tipoConsulta = tipoConsulta;
        this.detalles = detalles;
        this.marca = marca;
    }
}

export class Bloque {
  constructor(fecha, transacciones, hashBloqueAnterior = " ") {
    this.fecha = fecha;
    this.transacciones = transacciones;
    this.hashBloqueAnterior = hashBloqueAnterior;
    this.hash = this.calcularHash();
  }

  calcularHash() {
    return SHA256(
        this.hashBloqueAnterior +
        this.fecha +
        JSON.stringify(this.transacciones)
    ).toString();
  }

  minarBloque() {
    this.hash = this.calcularHash();
  }
}

export class BlockchainVehiculos {
  constructor() {
    this.blockchain = [this.bloqueGenesis()];
    this.transaccionesPendientes = [];
  }

  bloqueGenesis() {
    return new Bloque("01/01/2020", "Bloque Inicial de la Blockchain, necesario insertarlo manualmente.", "0");
  }

  obtenerUltimoBloque() {
    return this.blockchain[this.blockchain.length - 1];
  }

  anyadirNuevoBloque(nuevoBloque) {
    nuevoBloque.hashBloqueAnterior = this.obtenerUltimoBloque().hash;
    //nuevoBloque.hash = nuevoBloque.calcularHash();
    nuevoBloque.minarBloque();
    this.blockchain.push(nuevoBloque);
  }

  minarTransaccionesPendientes(){
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let bloque = new Bloque(today.toLocaleDateString() + " " + today.toLocaleTimeString(), this.transaccionesPendientes, this.obtenerUltimoBloque().hash);
    bloque.minarBloque();

    console.log('Bloque minado satisfactoriamente!');
    this.blockchain.push(bloque);

    this.transaccionesPendientes = [];
  }

  crearTransaccion(transaccion){
      this.transaccionesPendientes.push(transaccion);
  }

  comprobarValidezCadena() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const bloqueActual = this.blockchain[i];
      const bloqueAnterior = this.blockchain[i - 1];

      if (bloqueActual.hash !== bloqueActual.calcularHash()) {
        return false;
      }
      if (bloqueActual.hashBloqueAnterior !== bloqueAnterior.hash) return false;
    }
    return true;
  }

  buscarMatricula(matricula)
  {
    let transaccionescoche = [];
    for (let i = 1; i < this.blockchain.length; i++) {
      const bloqueActual = this.blockchain[i];
      const trans = bloqueActual.transacciones;
      for(let j = 0; j < trans.length; j++) {
        if(trans[j].vehiculo == matricula) {
          const mat = trans[j];
          mat.fecha = bloqueActual.fecha;
          mat.hashBloque = bloqueActual.hash;
          console.log(mat);
          transaccionescoche.push(trans[j]);
        }
      }
    }
    return transaccionescoche;
  }

}

/*
const fs = require('fs')
fs.writeFile('/Users/Xabi/Desktop/TFG/data.json', JSON.stringify(motorBlockchain, null, 4), err => {
  if (err) {
    console.error(err)
    return
  }
})
*/
