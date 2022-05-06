import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-transacciones-pendientes',
  templateUrl: './transacciones-pendientes.component.html',
  styleUrls: ['./transacciones-pendientes.component.scss']
})
export class TransaccionesPendientesComponent implements OnInit {

  public transaccionesPendientes:any;

  constructor(private blockchainservice:BlockchainService) { 
    this.transaccionesPendientes = blockchainservice.obtenerTransaccionesPendientes();
  }

  ngOnInit(): void {
  }

  minarTransaccionesPendientes(){
    this.blockchainservice.minarTransaccionesPendientes();
    this.transaccionesPendientes = [];
  }

}
