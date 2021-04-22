import { Component, OnInit } from '@angular/core';
import { ProformadetalleService } from '../servicio/proformadetalle.service';

@Component({
  selector: 'app-proformadetalle',
  templateUrl: './proformadetalle.component.html',
  styleUrls: ['./proformadetalle.component.css']
})
export class ProformadetalleComponent implements OnInit {
  detalle: any

  constructor( private proformadetalleservice:ProformadetalleService) { }

  ngOnInit(): void {
  }
  obtenerproformadetalle(identificador){
    this.proformadetalleservice.obtener(identificador).subscribe(resultado=>{
      this.detalle=resultado.data;
      console.log(this.detalle);
      
    },error=>{
      console.log(JSON.stringify(error));  
       console.log(identificador + "este es un id");
      // console.log(this.produ + "este producto");  
     });
   }
  
}
