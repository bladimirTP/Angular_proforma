import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';// exportamos
import { Observable } from 'rxjs'; //importamos
import { of } from 'rxjs';  //importamos

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  //inyectamos HttpClient en el constructo
  constructor(private httpClient:HttpClient) { }
  // estos son los eventos o funciones
  // apartir de aqui recibimoc los datos desde las apis rest

  obtener():Observable<any>{
       return this.httpClient.get("http://localhost:8000/categorias");
  }
  agregar(categoria:any){
    let json = JSON.stringify(categoria); //aqui ya tiene los datos
    let headers= new HttpHeaders().set('content-Type','applicatios/json');

    return this.httpClient.post("http://localhost:8000/categorias",json,{headers:headers});

  }
  elimainar(identificador):Observable<any>{
    return this.httpClient.delete("http://localhost:8000/categorias/" + identificador);
     
  }
  actualizar(categoria:any,identificador):Observable<any>{
    let json = JSON.stringify(categoria);
    let headers= new HttpHeaders().set('content-Type','applicatios/json');
    return this.httpClient.patch("http://localhost:8000/categorias/" + identificador,json,{headers:headers});
     
  }
}
