import { Injectable } from '@angular/core';
import { BlockchainVehiculos } from '../../assets/blockchain/blockchain'

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public instanciaBlockchain = new BlockchainVehiculos();

  constructor() { 
    //this.instanciaBlockchain.minarTransaccionesPendientes();
  }

  obtenerBloques(){
    return this.instanciaBlockchain.blockchain;
  }

  anyadirTransaccion(tx:any){
    this.instanciaBlockchain.crearTransaccion(tx);
  }

  obtenerTransaccionesPendientes(){
    return this.instanciaBlockchain.transaccionesPendientes;
  }

  obtenerTransaccionesVehiculo(matricula:any){
    return this.instanciaBlockchain.buscarMatricula(matricula);
  }

  minarTransaccionesPendientes(){
    this.instanciaBlockchain.minarTransaccionesPendientes();
  }
}
