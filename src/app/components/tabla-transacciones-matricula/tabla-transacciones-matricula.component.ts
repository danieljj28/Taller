import { Component, Input, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { DISPLAY } from 'html2canvas/dist/types/css/property-descriptors/display';

@Component({
  selector: 'app-tabla-transacciones-matricula',
  templateUrl: './tabla-transacciones-matricula.component.html',
  styleUrls: ['./tabla-transacciones-matricula.component.scss']
})
export class TablaTransaccionesMatriculaComponent implements OnInit {
  @Input() public transacciones:any;


  public downloadPDF(): void {
    const DATA: any = document.getElementById('htmlData');
    DATA.style.display = "block";
    const doc = new jsPDF('p', 'pt', 'a4');

    const options = {
      background: 'white',
      scale: 3
    };


    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save("registros");
    });

    DATA.style.display = "none";

  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
