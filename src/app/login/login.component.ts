import { NgForOf } from '@angular/common';
import { Component, ElementRef, NgModuleRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globales } from "src/app/components/globales";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:string="";
  password:string="";
  
  u1:string="";
  p1:string="";
  u2:string="";
  p2:string="";
  a:string="";
  b:string="";

 
  
  g:Globales=new Globales;
  
  public static claveprimaria = "049dde38ab5143c7ecc2f84d008e117fad8c4ed70b3934b5fd2d0d3f984f0196b249fde8fef91e012a5a8f54cfdacace1f5b91735993c81be8521748fd47b0873b";
  
  

  constructor(private router: Router) {
       
  }
  

  ngOnInit(): void {
    
  }

  
   
   


  login()
  {
    
    this.u1="049dde38ab5143c7ecc2f84d008e117fad8c4ed70b3934b5fd2d0d3f984f0196b249fde8fef91e012a5a8f54cfdacace1f5b91735993c81be8521748fd47b0873b";
    this.p1="6dc31503ab86b184181c56ed3961f18549660a25ca44774f02a8e34097455201"
    this.u2="049dde38ab5143c7ecc2f84d008e117fad8c4ed70b3934b5fd2d0d3f984f0196b249fde8fef91e012a5a8f54cfdacace1f5b91735993c81be8521748f";
    this.p2="6dc31503ab86b184181c56ed3961f18549660a25ca44774f02a8e340"
    this.a="a";
    this.b="b";
    
    this.user = (<HTMLInputElement>document.getElementById("user")).value;

    
    this.password = (<HTMLInputElement>document.getElementById("password")).value;


    if(this.user != "" && this.password != "")
    {
      if((this.user == this.u1 && this.password == this.p1))
      {
        
        
        localStorage.setItem('clavePrimaria', this.u1);
        localStorage.setItem('clavePrivada', this.p1);
        localStorage.setItem('loggeado','si');
        
        
        this.redirectUser();
      }else if((this.user == this.u2 && this.password == this.p2))
      {
        localStorage.setItem('clavePrimaria', this.u2);
        localStorage.setItem('clavePrivada', this.p2);
        localStorage.setItem('loggeado','si');
        
        
        this.redirectUser();
      }
      else
      {
        
        alert("Error en el login");
        
        this.redirectLog();
      }
    }else
    {
      alert("Usuario o contraseña vacias");
       this.redirectLog();
        
    }    
  }  
   private redirectUser():void {
    this.router.navigate(['/']);
  }
  private redirectLog():void
  {
    this.router.navigate(['/login']);
  }
}




