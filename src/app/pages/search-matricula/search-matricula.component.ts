import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import  {Router}  from '@angular/router';
import { Globales } from "src/app/components/globales";

@Component({
  selector: 'app-search-matricula',
  templateUrl: './search-matricula.component.html',
  styleUrls: ['./search-matricula.component.scss']
})
export class SearchMatriculaComponent implements OnInit {

  public transaccionescoche:any;
  g:Globales=new Globales;
  dato = "si";

  constructor(private blockchainservice:BlockchainService,private router: Router) { 
  }
  

  
  
 
  private redirectUser():void {
    this.router.navigate(['/login']);
  }
  private redirectH():void {
    this.router.navigate(['/searchMatricula']);
  }
  public logeadoOno(){
    
    if(this.dato!=localStorage.getItem("loggeado"))
    {
      this.redirectUser();
    }else
    {
      return;
    }
  };

  ngOnInit(): void {
    this.logeadoOno();
  }

  obtenerTransaccionesCoche(){
    this.transaccionescoche = this.blockchainservice.obtenerTransaccionesVehiculo((document.getElementById("search") as HTMLInputElement).value);
  }

}
