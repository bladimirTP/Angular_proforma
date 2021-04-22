import { Component, OnInit, Input } from '@angular/core';
import { EmpresaService } from '../servicio/empresa.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   agregarempresa:any={id:'',user_id:'',nombre:'',logo:'',estado:''};
   empresa:any;
   nombre:any;
  constructor(private userservice:EmpresaService) {
   this.obteneruserio();
   console.log(this.nombre);
   }
  ngOnInit(): void {
  }
   obteneruserio(){
      this.userservice.obtener().subscribe(resultado=>{
            this.empresa=resultado.data;
            console.log(this.empresa)
      },error=>{
        console.log(JSON.stringify(error));    
      }  
      );
   }


}
