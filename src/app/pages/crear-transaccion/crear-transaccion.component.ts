import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Transaccion } from 'src/assets/blockchain/blockchain';

@Component({
  selector: 'app-crear-transaccion',
  templateUrl: './crear-transaccion.component.html',
  styleUrls: ['./crear-transaccion.component.scss']
})
export class CrearTransaccionComponent implements OnInit {

  public nuevaTransaccion:any;

  constructor(private blockchainService:BlockchainService) { }

  ngOnInit(): void {
    this.nuevaTransaccion = new Transaccion();
  }

  crearTransaccion(){
    const nuevaTransaccion = this.nuevaTransaccion;
    this.nuevaTransaccion.taller = "Taller Prueba";

    this.blockchainService.anyadirTransaccion(this.nuevaTransaccion);

    this.nuevaTransaccion = new Transaccion();
  }

}
