import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globales } from "src/app/components/globales";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  g:Globales=new Globales();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
}
