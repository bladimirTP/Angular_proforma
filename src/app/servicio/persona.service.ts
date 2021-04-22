import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';// exportamos
import { Observable } from 'rxjs'; //importamos
import { of } from 'rxjs';  //importamos

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
 //inyectamos HttpClient en el constructo
  constructor(private httpClient:HttpClient) { }
  // estos son los eventos o funciones
  // apartir de aqui recibimoc los datos desde las apis rest

  obtenerTodasLasPersonas():Observable<any>{
       return this.httpClient.get("http://localhost/restfulphp/post.php");
  }
  agregarPersona(persona:any){
      let json = JSON.stringify(persona); //aqui ya tiene los datos
      let headers= new HttpHeaders().set('content-Type','applicatios/json');

      return this.httpClient.post("http://localhost/restfulphp/post.php",json,{headers:headers});
  }
  elimainarPersona(identificador):Observable<any>{
    return this.httpClient.delete("http://localhost/restfulphp/post.php?id=" + identificador);
     
  }

}
