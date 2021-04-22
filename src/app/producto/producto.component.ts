import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicio/producto.service';
import {Router,ActivatedRoute} from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../servicio/categoria.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  agregarproductos:any={id:'',categoria_id:'',empresa_id:'',nombre:'',precio:'',imagen:''
  ,cantidad:'',marca:'',estado:''
  ,descripcion:''};

  producto:any;
  categoria:any;// me recive  todas las categorias filtradas con pipe, al momento  de agregar un producto
  produ:any;// recible el nombre de la empresa que esta como parametro
  identificador:any;// identificador de la empresa que va como parametro
  estate:any;// activa el formulario en uno
  seleccioncate :any;
  filtroproducto:any;

  constructor(public productoservice:ProductoService,private toastr: ToastrService,private categoriaservice
    :CategoriaService,
    private route:ActivatedRoute,private router:Router) { 
      console.log(this.agregarproductos);
 
  }

    

  ngOnInit(): void {
    this.route.params.subscribe( params=>{
      if(params["nombre"]!=null){   //aqui se recive los parametros de la url al momento de mandar por la url a otro componente
         this.produ=params["nombre"];// nombre d ela empresa
         this.identificador=params["iden"];// identificador de la empresa
         //console.log(params);
         this.filtroproducto='';
         this.obtenerproductoempresa();
         this.Obtenercategorias();
         this.seleccionarcategorias();
      
      }
    })
  }
  
   obtenerproductoempresa(){
    this.productoservice.obtenerproductosdeempresas(this.identificador).subscribe(resultado=>{
      this.producto=resultado.data;
      console.log(this.producto);
      
    },error=>{
      console.log(JSON.stringify(error));  
      console.log(this.identificador + "este es un id");
      console.log(this.produ + "este producto");  
     });
   }
   eliminarproducto(){
    this.productoservice.eliminar(this.agregarproductos.id).subscribe(resultado =>{
      this.obtenerproductoempresa();
      this.toastr.info('producto eliminado con exito');
    
     },
     error=>{
          console.log(JSON.stringify(error) +'no se epuede eliminar el producto');      
          this.toastr.info('no se puede eliminar el producto');
         
      });
    
  }
  agregarproducto(){    

   var formdata= new FormData();
   formdata.append('nombre',this.agregarproductos.nombre);
   formdata.append('precio', this.agregarproductos.precio);
   formdata.append('imagen', this.agregarproductos.imagen);
   formdata.append('cantidad',this.agregarproductos.cantidad);
   formdata.append('marca', this.agregarproductos.marca);
   formdata.append('descripcion', this.agregarproductos.descripcion);


    formdata.forEach((value,key) => {
    console.log(key+" "+value )
    console.log('esto es el foemdT');
     }); 

    if (this.agregarproductos.id=='') {
       this.productoservice.agregar(formdata,this.identificador,this.agregarproductos.categoria_id).subscribe(resultado=>{ 
          
          this.obtenerproductoempresa();
          this.toastr.success('insertado con exito', 'Toastr fun!');
          this.desactivarCreate();
      
       }, error=>{
          console.log(JSON.stringify(error));   
          this.toastr.error('error al insertar', 'Toastr fun!');
          
       });    
    } else{
        this.productoservice.actualizar(this.identificador,this.agregarproductos.categoria_id,this.agregarproductos.id,this.agregarproductos).subscribe(resultado =>{
        this.obtenerproductoempresa();
        this.resetForm();
        this.desactivarCreate();
        this.toastr.success('producto actualizado con exito');

      }, error=>{
          console.log(JSON.stringify(error));   
          this.toastr.error("no se pudo actualizar el producto producto");
       });
    };
  }
  actualizarproducto(producto){  
      this.agregarproductos= Object.assign({},producto);
      console.log(this.agregarproductos);
    
  }
  resetForm(){
    this.agregarproductos.id='',
    this.agregarproductos.categoria_id='',
    this.agregarproductos.empresa_id=''; // preparamos los datos que vamos agregar
    this.agregarproductos.nombre=''; 
    this.agregarproductos.precio=''; 
    this.agregarproductos.imagen=''; 
    this.agregarproductos.cantidad=''; 
    this.agregarproductos.marca=''; 
    this.agregarproductos.descripcion=''; 
    this.agregarproductos.estado=''; 
     this.estate=1;
  }
  desactivarCreate(){
    this.estate=0;
  }

  onfilechange(event){
    console.log("llego a evento imagen");
    let reader=new FileReader();
    if (event.target.files && event.target.files.length>0) {
        this.agregarproductos.imagen =event.target.files[0];
     
    }
  }
    rescategoria(event){
        this.agregarproductos.categoria_id=event.target.value;
        console.log(this.agregarproductos.categoria_id);
    }
  

  ///////obtener Categoria
  Obtenercategorias(){
    this.categoriaservice.obtener().subscribe(resultado =>{
     this.categoria=resultado.data;
      console.log(this.categoria);
    },
    error=>{
         console.log(JSON.stringify(error));      
        
     });
  }
  seleccionarcategorias(){
    this.productoservice.obtenercategoriadeempresas(this.identificador).subscribe(resultado =>{
      this.seleccioncate=resultado.data;
       console.log(this.seleccioncate);
     },
     error=>{
          console.log(JSON.stringify(error));      
         
      });   
  }
  
}
   
