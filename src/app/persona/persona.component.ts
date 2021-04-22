import { Component, OnInit } from '@angular/core';
import {PersonaService} from '../servicio/persona.service';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  agregarPersonaRegistro:any={Nombre:'',Apellido:'',Edad:'',Isprofesional:''} // preparamos los datos que vamos agregar

  personas:any;
  constructor(private personaService: PersonaService) { 
    this.ObtenerPersonas();// llamamos al metodo obtener
   
  }
  // esta funcion obtiene los dato  de la api en php atravez de la funcion obtenerTodasLasPersonas()
  ObtenerPersonas(){
    this.personaService.obtenerTodasLasPersonas().subscribe(resultado =>{
     this.personas=resultado;
      //console.log(this.personas);
    },
    error=>{
         console.log(JSON.stringify(error));      
        
     });
  }
  
  ngOnInit(): void {

  }

 
  eliminarPersona(identificador){
      this.personaService.elimainarPersona(identificador).subscribe(resultado =>{
        this.ObtenerPersonas();
        console.log(this.personas);
       },
       error=>{
            console.log(JSON.stringify(error));      
           
        });
  }
  AgregarPersona(){
      
      this.personaService.agregarPersona(this.agregarPersonaRegistro).subscribe(resultado=>{
        
        this.ObtenerPersonas();
        
      }, error=>{
          console.log(JSON.stringify(error));   
          console.log("no se pudo realizar el post")   ;
        
         
      });
    
      
  }
}
