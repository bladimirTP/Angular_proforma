import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmpresaService } from '../servicio/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  agregarempresa:any={id:'',nombre:'',logo:'',estado:'',user_id:''};
  empresa:any;
  usuarios:any;
  estate:any;
  filtroempresa:any;
 constructor(private Empresaservice:EmpresaService,private toastr:ToastrService) {
  this.ObtenerEmpresa();
  }
 ngOnInit(): void {
   this.filtroempresa='';
 }
  ObtenerEmpresa(){
     this.Empresaservice.obtener().subscribe(resultado=>{
           this.empresa=resultado.data;
           console.log(this.empresa);
     },error=>{
       console.log(JSON.stringify(error));    
     }
     
     );
  }

  
  EliminarEmpresa(){
    this.Empresaservice.eliminar(this.agregarempresa.id).subscribe(resultado =>{
      this.ObtenerEmpresa();
      this.toastr.info('Empresa inactivado con exito');
    
     },
     error=>{
          console.log(JSON.stringify(error) +'no se epuede eliminar el producto');      
          this.toastr.info('no se puede eliminar el producto');
         
      });
    
  }
  AgregarEmpresa(){    
        var formdata= new FormData();
        formdata.append('nombre',this.agregarempresa.nombre);
        formdata.append('imagen', this.agregarempresa.logo);
        formdata.append('estado', this.agregarempresa.estado);
        formdata.append('id',this.agregarempresa.id);
        formdata.append('user_id',this.agregarempresa.user_id); 
          formdata.forEach((value,key) => {
          console.log(key+" "+value )
          }); 
         this.Empresaservice.agregar(formdata).subscribe(resultado=>{ 
          this.ObtenerEmpresa();
          this.toastr.success('Empresa insertado con exito', 'Toastr fun!');
          this.desactivarCreate();
      
       }, error=>{
          console.log(JSON.stringify(error));   
          this.toastr.error(JSON.stringify(error.error), 'Toastr fun!');
          
       });    
  }
  actualizarempresa(empresa){  
      this.agregarempresa= Object.assign({},empresa);
      console.log(this.agregarempresa);
    
  }
  resetForm(){
    this.agregarempresa.id='',
    this.agregarempresa.nombre='',
    this.agregarempresa.logo=''; // preparamos los datos que vamos agregar
    this.agregarempresa.user_id=''; 
    
     this.estate=1;
  }
  desactivarCreate(){
    this.estate=0;
  }

  onfilechange(event){
    console.log("llego a evento imagen");
    let reader=new FileReader();
    if (event.target.files && event.target.files.length>0) {
        this.agregarempresa.logo =event.target.files[0];
     
    }
  }
    rescategoria(event){
        this.agregarempresa.user_id=event.target.value;
        console.log(this.agregarempresa.user_id);
    }
  

  ///////obtener Categoria
  ObtenerUsuario(){
    this.Empresaservice.obtenerusers().subscribe(resultado =>{
     this.usuarios=resultado.data;
      console.log(this.usuarios);
    },
    error=>{
         console.log(JSON.stringify(error));      
        
     });
  }
  // seleccionarcategorias(){
  //   this.productoservice.obtenercategoriadeempresas(this.identificador).subscribe(resultado =>{
  //     this.seleccioncate=resultado.data;
  //      console.log(this.seleccioncate);
  //    },
  //    error=>{
  //         console.log(JSON.stringify(error));      
         
  //     });   
  // }
}
