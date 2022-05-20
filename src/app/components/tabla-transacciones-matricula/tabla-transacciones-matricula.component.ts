import { Component, Input, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-tabla-transacciones-matricula',
  templateUrl: './tabla-transacciones-matricula.component.html',
  styleUrls: ['./tabla-transacciones-matricula.component.scss']
})
export class TablaTransaccionesMatriculaComponent implements OnInit {
  @Input() public transacciones:any;

  VIDEOGAMES = [
    {
      id : 1,
      name: "Animal Crossing",
      platform: "Nintendo Switch",
      reference : "1-770-736-8031"
    },
    {
      id: 2,
      name: "The Legend of Zelda: Ocarina of Time CV",
      platform: "Wii U",
      reference: "1-770-736-2323"
    },
    {
      id: 3,
      name: "Metal Gear Solid",
      platform: "Playstation (PSX)",
      reference: "1-4564-736-334"
    },
    {
      id: 4,
      name: "ShenMue",
      platform: "Sega Dreamcast",
      reference: "3-770-736-4532"
    },
    {
      id: 5,
      name: "Rise of the Tomb Raider",
      platform: "Playstation 4",
      reference: "1-324-736-3245"
    },
    {
      id: 6,
      name: "Resident Evil 2",
      platform: "Playstation",
      reference: "1-123-3336-4321"
    }
  ];
  
  constructor() {
  }
  public downloadPDF(): void {
    const doc = new jsPDF();

    doc.text('Hello world!', 10, 10);
    doc.save('hello-world.pdf');
  }

  ngOnInit(): void {
  }

}
