import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/servicio/empresa.service';


@Component({
  selector: 'app-admin-cliente',
  templateUrl: './admin-cliente.component.html',
  styleUrls: ['./admin-cliente.component.css']
})
export class AdminClienteComponent implements OnInit {
empresa :any;
iduser= 1;
  constructor(private Empresaservice: EmpresaService) { }

  ngOnInit(): void {
  }

  ObtenerEmpresa(){
    this.Empresaservice.obtenerUserEmpresa(this.iduser).subscribe(resultado=>{
          this.empresa=resultado.data;
          console.log(this.empresa);
    },error=>{
      console.log(JSON.stringify(error));    
    }
    
    );
 }

}
