const SHA256 = require("crypto-js/sha256");

export class Transaccion {
    constructor(vehiculo, taller, tipoConsulta, detalles){
        this.vehiculo = vehiculo;
        this.taller = taller;
        this.tipoConsulta = tipoConsulta;
        this.detalles = detalles;
    }
}

export class Bloque {
  constructor(fecha, transacciones, hashBloqueAnterior = " ") {
    this.fecha = fecha;
    this.transacciones = transacciones;
    this.hashBloqueAnterior = hashBloqueAnterior;
    this.hash = this.calcularHash();
    this.numeroParaValidacion = 0;
  }

  calcularHash() {
    return SHA256(
        this.hashBloqueAnterior +
        this.fecha +
        JSON.stringify(this.transacciones) +
        this.numeroParaValidacion
    ).toString();
  }

  minarBloque() {
    while (
      this.hash.substring(0, 1) !== Array(1 + 1).join("0")
    ) {
      this.numeroParaValidacion++;
      this.hash = this.calcularHash();
    }
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
    let bloque = new Bloque(Date.now(), this.transaccionesPendientes, this.obtenerUltimoBloque().hash);
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
}

let motorBlockchain = new BlockchainVehiculos();

console.log("Minado para la validacion de los bloques de motorBlockchain en proceso...");
motorBlockchain.anyadirNuevoBloque(
  new Bloque("01/06/2020", {
    vehiculo: "9394GCJ",
    taller: "Taller Kike",
    tipoConsulta: "Revision",
    detalles: "Cambio pastillas de freno"
  })
);

motorBlockchain.anyadirNuevoBloque(
    new Bloque("01/06/2020", {
        vehiculo: "1234BBB",
        taller: "Taller Audi Alicante",
        tipoConsulta: "Reparacion",
        detalles: "Cambio chasis frontal"
    })
);

motorBlockchain.anyadirNuevoBloque(
    new Bloque("01/06/2020", [{
        vehiculo: "0000QWR",
        taller: "Taller Mercedes Madrid",
        tipoConsulta: "Reparacion",
        detalles: "Cambio tubo de escape"
    },
    {
        vehiculo: "1111PPP",
        taller: "Taller Mercedes Madrid",
        tipoConsulta: "Revision",
        detalles: "ITV"
    }])
);

motorBlockchain.crearTransaccion(new Transaccion('1234QQQ', 'Taller Jaime', 'Reparacion', 'Motor inexistente'));
motorBlockchain.crearTransaccion(new Transaccion('1234QZQ', 'Taller Perez', 'Reparacion', 'Motor inexistente'));
motorBlockchain.crearTransaccion(new Transaccion('1234QQD', 'Taller Juan', 'Reparacion', 'Motor inexistente'));
motorBlockchain.minarTransaccionesPendientes();

motorBlockchain.crearTransaccion(new Transaccion('1234ZZZ', 'Taller Jaime', 'Reparacion', 'Motor inexistente'));
motorBlockchain.crearTransaccion(new Transaccion('1234PPP', 'Taller Perez', 'Reparacion', 'Motor inexistente'));
motorBlockchain.crearTransaccion(new Transaccion('1234TTT', 'Taller Juan', 'Reparacion', 'Motor inexistente'));
motorBlockchain.minarTransaccionesPendientes();

console.log(JSON.stringify(motorBlockchain, null, 4));

/*
const fs = require('fs')
fs.writeFile('/Users/Xabi/Desktop/TFG/data.json', JSON.stringify(motorBlockchain, null, 4), err => {
  if (err) {
    console.error(err)
    return
  }
})
*/