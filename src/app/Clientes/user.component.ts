import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../servicio/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  agregarUsuarios:any={id:'',nombre:'',apellido:'',email:'',verificado:'',admin:''};
  @Input("datousuario") usuarios:any;
  ACTIVO="activo";
  INACTIVO="inactivo";
  estate:any;
  cli:any;
  constructor( private userservice:UserService,toastr:ToastrService) {
          this.obtenerUsuario();
   }
  ngOnInit(): void {
    
  }
  obtenerUsuario(){
    this.userservice.obteneruser().subscribe(resultado=>{
      this.usuarios=resultado.data;
     
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
