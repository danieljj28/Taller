import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-bloque',
  templateUrl: './ver-bloque.component.html',
  styleUrls: ['./ver-bloque.component.scss']
})
export class VerBloqueComponent implements OnInit {

  @Input() 
  public block:any;

  constructor() { }

  ngOnInit(): void {
  }

}
