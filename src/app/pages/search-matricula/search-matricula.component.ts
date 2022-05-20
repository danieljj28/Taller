import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-search-matricula',
  templateUrl: './search-matricula.component.html',
  styleUrls: ['./search-matricula.component.scss']
})
export class SearchMatriculaComponent implements OnInit {

  public transaccionescoche:any;

  constructor(private blockchainservice:BlockchainService) { 
  }

  ngOnInit(): void {
  }

  obtenerTransaccionesCoche(){
    this.transaccionescoche = this.blockchainservice.obtenerTransaccionesVehiculo((document.getElementById("search") as HTMLInputElement).value);
  }

}
