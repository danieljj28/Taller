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
    this.blockchain.push(this.bloque1());
    this.blockchain.push(this.bloque2());
    this.transaccionesPendientes = [];
  }

  bloqueGenesis() {
    return new Bloque("01/1/2022 00:00:00", "Bloque Inicial de la Blockchain, necesario insertarlo manualmente.", "0");
  }

  bloque1(){
    const hant = this.obtenerUltimoBloque();
    return new Bloque("18/5/2020 12:38:27", [new Transaccion("1111BBB", "04a59434b3711dbe7c6bc006ac27a13945ba418cc6534e4b6ba1f5b4acd723155a3376cf39e18e7f4ba3ae7cad43eee0db9b66cbd02ab46005ab99697097476daa", "Motor", "Motor averiado"), new Transaccion("9999QWS", "04a59434b3711dbe7c6bc006ac27a13945ba418cc6534e4b6ba1f5b4acd723155a3376cf39e18e7f4ba3ae7cad43eee0db9b66cbd02ab46005ab99697097476daa", "Aceite", "Cambio aceite"), new Transaccion("4567PLH", "04bdfb6fa2a447ba639402038d219c38fc5d995189608b2cdf90a558f74e373ff9ef01d69ee1dbf0b2d0f524743f1db44edc9d842d84708fe35a5e5ddfdad54277", "Motor", "Limpieza motor"), new Transaccion("9999QWS", "04bdfb6fa2a447ba639402038d219c38fc5d995189608b2cdf90a558f74e373ff9ef01d69ee1dbf0b2d0f524743f1db44edc9d842d84708fe35a5e5ddfdad54277", "Motor", "Sobrecalentamiento")], hant.hash);
  }

  bloque2(){
    const hant = this.obtenerUltimoBloque();
    return new Bloque("23/5/2020 19:55:36", [new Transaccion("0756TRD", "0454395cea19fc46d99fd257beb045df6f4a99154a3e3c687ab1358de5b0cf1ccd53ccbc55a948a364fc4a01e8c88494818c80c50252949f0664ae36a8078d2e20", "Carburante", "Carburante equivocado"), new Transaccion("9999QWS", "04a59434b3711dbe7c6bc006ac27a13945ba418cc6534e4b6ba1f5b4acd723155a3376cf39e18e7f4ba3ae7cad43eee0db9b66cbd02ab46005ab99697097476daa", "Motor", "Motor averiado"), new Transaccion("4567PLH", "0454395cea19fc46d99fd257beb045df6f4a99154a3e3c687ab1358de5b0cf1ccd53ccbc55a948a364fc4a01e8c88494818c80c50252949f0664ae36a8078d2e20", "Asientos", "Cambio de asientos"), new Transaccion("1111BBB", "0454395cea19fc46d99fd257beb045df6f4a99154a3e3c687ab1358de5b0cf1ccd53ccbc55a948a364fc4a01e8c88494818c80c50252949f0664ae36a8078d2e20", "Motor", "Cambio motor")], hant.hash);
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
