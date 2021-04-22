import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicio/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
    agregarUsuarios:any={id:'',nombre:'',apellido:'',email:'',admin:'',password:'',estado:''};
    clientes:any;
    ACTIVO="activo";
    INACTIVO="inactivo";
    estate:any;
    cli:any;
    constructor( private userClienteService:UserService,private toastr:ToastrService) {
            this.obtenerUsuario();
     }
    ngOnInit(): void {
      
    }
    obtenerUsuario(){
      this.userClienteService.obteneruser().subscribe(resultado=>{
        this.clientes=resultado.data;  
      },error=>{
        console.log(JSON.stringify(error));   
      });
    }
    obtenerCliente(){
      this.userClienteService.obtenerusers().subscribe(resultado=>{
        this.clientes=resultado.data;
       
      },error=>{
        console.log(JSON.stringify(error)); 
        
      });
    }
  
    guardarUsuario(){
      console.log(this.agregarUsuarios);
      if (this.agregarUsuarios.id=='') {
         this.userClienteService.agregar(this.agregarUsuarios).subscribe(resultado=>{ 
            
            this.obtenerUsuario();
            this.toastr.success('insertado con exito', 'Toastr fun!');
            this.desactivarCreate();
        
         }, error=>{
            console.log(JSON.stringify(error));   
            this.toastr.error('error al insertar', 'Toastr fun!');
            
         });    
      } else{
          this.userClienteService.actualizar(this.agregarUsuarios,this.agregarUsuarios.id).subscribe(resultado =>{
          this.obtenerUsuario();
          this.resetForm();
          this.desactivarCreate();
  
          this.toastr.success('Usuario actualizado con exito');
  
        }, error=>{
            console.log(JSON.stringify(error));   
            this.toastr.error("no se pudo actualizar el usuario");
     });
    }
    };
    eliminarUsuario(){
      this.userClienteService.elimainar(this.agregarUsuarios.id).subscribe(resultado =>{
        this.obtenerUsuario();
        this.toastr.info('Usuario eliminado con exito');
      
       },
       error=>{
            console.log(JSON.stringify(error) +'no se pudo eliminar el usuario');      
           
        });
    }
    actualizarUsuario(usuario){
      this.agregarUsuarios= Object.assign({},usuario);
      console.log(this.agregarUsuarios);
    }
  
    resetForm(){
      this.agregarUsuarios.id='',
      this.agregarUsuarios.nombre='',
      this.agregarUsuarios.apellido=''; // preparamos los datos que vamos agregar
      this.agregarUsuarios.email='';
      this.agregarUsuarios.admin='';
      this.agregarUsuarios.estado='';
      this.estate=1;
    }
    desactivarCreate(){
      this.estate=0;
    }

}
