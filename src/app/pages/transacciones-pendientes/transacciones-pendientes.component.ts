import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import  {Router}  from '@angular/router';
import { Globales } from "src/app/components/globales";

@Component({
  selector: 'app-transacciones-pendientes',
  templateUrl: './transacciones-pendientes.component.html',
  styleUrls: ['./transacciones-pendientes.component.scss']
})
export class TransaccionesPendientesComponent implements OnInit {

  public transaccionesPendientes:any;
  g:Globales=new Globales;
  dato = "si";
  

  constructor(private blockchainservice:BlockchainService,private router: Router) { 
    this.transaccionesPendientes = blockchainservice.obtenerTransaccionesPendientes();
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

  private redirectUser():void {
    this.router.navigate(['/login']);
  }
  private redirectH():void {
    this.router.navigate(['/']);
  }
  
 
 
  ngOnInit(): void {
    this.logeadoOno();
  }


  

  minarTransaccionesPendientes(){
    this.blockchainservice.minarTransaccionesPendientes();
    this.transaccionesPendientes = [];
  }

}
