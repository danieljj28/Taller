import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-observar-blockchain',
  templateUrl: './observar-blockchain.component.html',
  styleUrls: ['./observar-blockchain.component.scss']
})
export class ObservarBlockchainComponent implements OnInit {
  public bloques = new Array;
  public bloqueSeleccionado:any;

  constructor(private blockchainService: BlockchainService) { 
    this.bloques = blockchainService.obtenerBloques();
    this.bloqueSeleccionado = this.bloques[0];
  }

  ngOnInit(): void {
  }

  verTransacciones(block:any){
    this.bloqueSeleccionado = block;
  }

}
