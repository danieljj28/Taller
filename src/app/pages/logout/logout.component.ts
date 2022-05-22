import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globales } from "src/app/components/globales";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.logOut();
  }
  logOut()
  {
    localStorage.clear();
    console.log(localStorage.getItem("loggeado"));
    this.redirectLog();
  }
  
  private redirectLog():void
  {
    this.router.navigate(['/login']);
  }

}
