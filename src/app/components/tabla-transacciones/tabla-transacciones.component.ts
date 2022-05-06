import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-transacciones',
  templateUrl: './tabla-transacciones.component.html',
  styleUrls: ['./tabla-transacciones.component.scss']
})
export class TablaTransaccionesComponent implements OnInit {
  @Input() public transacciones:any;

  constructor() { }

  ngOnInit(): void {
  }

}
