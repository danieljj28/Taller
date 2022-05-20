import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-transacciones-matricula',
  templateUrl: './tabla-transacciones-matricula.component.html',
  styleUrls: ['./tabla-transacciones-matricula.component.scss']
})
export class TablaTransaccionesMatriculaComponent implements OnInit {
  @Input() public transacciones:any;

  constructor() { }

  ngOnInit(): void {
  }

}
