import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import  {Router}  from '@angular/router';
import { Globales } from "src/app/components/globales";

@Component({
  selector: 'app-observar-blockchain',
  templateUrl: './observar-blockchain.component.html',
  styleUrls: ['./observar-blockchain.component.scss']
})
export class ObservarBlockchainComponent implements OnInit {
  public bloques = new Array;
  public bloqueSeleccionado:any;
  g:Globales=new Globales;
  dato = "si";

  constructor(private blockchainService: BlockchainService,private router: Router) { 
    this.bloques = blockchainService.obtenerBloques();
    this.bloqueSeleccionado = this.bloques[0];
  }
  
  public logeadoOno(){
    
    if(this.dato!=localStorage.getItem("loggeado"))
    {
      this.redirectUser();
    }else
    {
      this.redirectH();
    }
  };
  

  
  
  ngOnInit(): void {
    this.logeadoOno();
    console.log(localStorage.getItem("loggeado"));
  }
  

  verTransacciones(block:any){
    this.bloqueSeleccionado = block;
  }
  private redirectUser():void {
    this.router.navigate(['/login']);
  }
  private redirectH():void {
    this.router.navigate(['/']);
  }

}
