import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {CategoriaService} from '../servicio/categoria.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  agregarPersonaRegistro:any={id: '',nombre:'',estado:''} // preparamos los datos que vamos agregar

  categoria:any;
  categori:any;
  ACTIVO="activo";
  INACTIVO="inactivo";
  estate:any;

   
 
 
  constructor(private categoriaService: CategoriaService,private toastr: ToastrService) { 
    this.Obtenercategorias();// llamamos al metodo obtener
     if (this.agregarPersonaRegistro.id==null) {
          this.resetForm();
     }
  }
  // esta funcion obtiene los dato  de la api en php atravez de la funcion obtenerTodasLasPersonas()
  Obtenercategorias(){
    this.categoriaService.obtener().subscribe(resultado =>{
     this.categoria=resultado.data;
      console.log(this.categoria);
    },
    error=>{
         console.log(JSON.stringify(error));      
        
     });
  }
  
  ngOnInit(): void {

  }

  eliminarcategoria(){
    this.categoriaService.elimainar(this.agregarPersonaRegistro.id).subscribe(resultado =>{
      this.Obtenercategorias();
      this.toastr.info('Categoria eliminado con exito');
    
     },
     error=>{
          console.log(JSON.stringify(error) +'no s epuede eliminar');      
         
      });
    
  }
  AgregarCategoria(){    

    console.log(this.agregarPersonaRegistro.id)   ;
    if (this.agregarPersonaRegistro.id=='') {
       this.categoriaService.agregar(this.agregarPersonaRegistro).subscribe(resultado=>{ 
          
          this.Obtenercategorias();
          this.toastr.success('insertado con exito', 'Toastr fun!');
          this.desactivarCreate();
      
       }, error=>{
          console.log(JSON.stringify(error));   
          this.toastr.error('error al insertar', 'Toastr fun!');
          
       });    
    } else{
        this.categoriaService.actualizar(this.agregarPersonaRegistro,this.agregarPersonaRegistro.id).subscribe(resultado =>{
        this.Obtenercategorias();
        this.resetForm();
        this.desactivarCreate();

        this.toastr.success('Categoria actualizado con exito');

      }, error=>{
          console.log(JSON.stringify(error));   
          this.toastr.error("no se pudo actualizar la categoria");
   });
  }
  }
  actualizarcategoria(categori){  
      this.agregarPersonaRegistro= Object.assign({},categori);
      console.log(this.agregarPersonaRegistro);
    
  }
  resetForm(){
    this.agregarPersonaRegistro.id='',
    this.agregarPersonaRegistro.nombre='',
    this.agregarPersonaRegistro.estado=''; // preparamos los datos que vamos agregar
     this.estate=1;
  }
  desactivarCreate(){
    this.estate=0;
  }
}
