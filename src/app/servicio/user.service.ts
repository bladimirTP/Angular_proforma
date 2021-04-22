import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';// exportamos
import { Observable } from 'rxjs'; //importamos
import { of } from 'rxjs';  //importamos

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {

   }
    obteneruser():Observable<any>{
      return this.httpClient.get("http://localhost:8000/clien");
    }
    obtenerusers():Observable<any>{
    return this.httpClient.get("http://localhost:8000/users");
    }
    obtenersellers():Observable<any>{
      return this.httpClient.get("http://localhost:8000/vendedors");
    }

    agregar(usuario:any){
      let json = JSON.stringify(usuario); //aqui ya tiene los datos
      let headers= new HttpHeaders().set('content-Type','applicatios/json');
  
      return this.httpClient.post("http://localhost:8000/users",json,{headers:headers});
  
    }
    elimainar(identificador):Observable<any>{
      return this.httpClient.delete("http://localhost:8000/users/" + identificador);
       
    }
    actualizar(usuario:any,identificador):Observable<any>{
      let json = JSON.stringify(usuario);
      let headers= new HttpHeaders().set('content-Type','applicatios/json');
      return this.httpClient.patch("http://localhost:8000/users/" + identificador,json,{headers:headers});
       
    }
}
