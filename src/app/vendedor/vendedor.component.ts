import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicio/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  agregarUsuarios:any={id:'',nombre:'',apellido:'',email:'',verificado:'',admin:''};
  vendedor:any;
  ACTIVO="activo";
  INACTIVO="inactivo";
  estate:any;
  cli:any;

  constructor( private usercomprador:UserService,toastr:ToastrService) {
          this.obtenerVendedor();

   }

  ngOnInit(): void {
    
  }
  obtenerUsuario(){
    this.usercomprador.obteneruser().subscribe(resultado=>{
      this.vendedor=resultado.data;
     
    },error=>{
      console.log(JSON.stringify(error)); 
      
    });
  }
  obtenerVendedor(){
    this.usercomprador.obtenersellers().subscribe(resultado=>{
      this.vendedor=resultado.data;
     
    },error=>{
      console.log(JSON.stringify(error)); 
      
    });
  }
  guardarUsuario(){};
  eliminarUsuario(){}
  actualizarUsuario(usuario:any){}

  resetForm(){
    this.agregarUsuarios.id='',
    this.agregarUsuarios.nombre='',
    this.agregarUsuarios.apellido=''; // preparamos los datos que vamos agregar
    this.agregarUsuarios.email='';
    this.agregarUsuarios.verificado='';
    this.agregarUsuarios.admin='';
    this.estate=1;
  }
  desactivarCreate(){
    this.estate=0;
  }
}
