import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import  {Router}  from '@angular/router';
import { Globales } from "src/app/components/globales";


import { BlockchainService } from 'src/app/services/blockchain.service';
import { Transaccion } from 'src/assets/blockchain/blockchain';


@Component({
  selector: 'app-crear-transaccion',
  templateUrl: './crear-transaccion.component.html',
  styleUrls: ['./crear-transaccion.component.scss']
})
export class CrearTransaccionComponent implements OnInit {

  public nuevaTransaccion:any;
  verSeleccion: string = '';
  opcionSeleccionado: string  = '0';
  dato = "si";
  clave = localStorage.getItem("clavePrimaria")+"";
  

  
  g:Globales=new Globales;

  constructor(private blockchainService:BlockchainService,private router: Router) {
    
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
    (<HTMLInputElement>document.getElementById("toAddress")).placeholder = this.clave;
    (<HTMLInputElement>document.getElementById("toAddress")).value = this.clave;
    this.nuevaTransaccion = new Transaccion();
    
  }
  private redirectUser():void {
    this.router.navigate(['/login']);
  }
  
  crearTransaccion(){ 
    const nuevaTransaccion = this.nuevaTransaccion;
    this.nuevaTransaccion.taller = this.clave;
    if(nuevaTransaccion.vehiculo != "" && nuevaTransaccion.detalles != "" && nuevaTransaccion.tipoConsulta != "")
    {
      this.blockchainService.anyadirTransaccion(this.nuevaTransaccion);
      this.nuevaTransaccion = new Transaccion();
    }
    else
    {
      
      alert("No se ha agregado la transaccion porque no puede estar ningun campo vacio");
    }
  }
  
  
}

