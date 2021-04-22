import { Component, OnInit } from '@angular/core';
import { ProformaService } from '../servicio/proforma.service';

@Component({
  selector: 'app-proforma',
  templateUrl: './proforma.component.html',
  styleUrls: ['./proforma.component.css']
})
export class ProformaComponent implements OnInit {
  datoproforma:any={numero: '',total:'',estado:'',descuento:''} // preparamos los datos que vamos agregar

  identificador=2;
  proforma:any;
  detalle:any;

  constructor(private profrormaservice:ProformaService) {
    this.obtenerproformaempresa();
   }

  ngOnInit(): void {
           
  }

  obtenerproformaempresa(){
    this.profrormaservice.obtener(this.identificador).subscribe(resultado=>{
      this.proforma=resultado.data;
      console.log(this.proforma);
      
    },error=>{
      console.log(JSON.stringify(error));  
       console.log(this.identificador + "este es un id");
      // console.log(this.produ + "este producto");  
     });
   }

   obtenerproformadetalle(id_profroma){
     this.detalle=null;
    this.profrormaservice.obtenerdetalle(id_profroma).subscribe(resultado=>{
      
      this.detalle=resultado.data;
     
      console.log(this.detalle);   
    },error=>{
      console.log(JSON.stringify(error));  
       console.log(this.identificador + "este es un id");
      // console.log(this.produ + "este producto");  
     });
   }

    datosproforma(profor){
      
      this.datoproforma.numero=profor.numero;
      this.datoproforma.descuento=profor.descuento;
      this.datoproforma.total=profor.total;
      this.datoproforma.estado=profor.estado;
      console.log(this.datoproforma +"esto es datos proforma");

    }
  


}
