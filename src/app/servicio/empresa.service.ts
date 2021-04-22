import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';// exportamos
import { Observable } from 'rxjs'; //importamos
import { of } from 'rxjs';  //importamos

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private httpClient:HttpClient) { }

    obtener():Observable<any>{
      return this.httpClient.get("http://localhost:8000/empresas");
    }
    agregar(formData){
       return this.httpClient.post("http://localhost:8000/empresas/",formData)
      
    }
    eliminar(identificador):Observable<any>{
      return this.httpClient.delete("http://localhost:8000/empresas/" + identificador);
      
    }
    actualizar(empresa,identificador):Observable<any>{
      let json = JSON.stringify(empresa);
      let headers= new HttpHeaders().set('content-Type','applicatios/json');
      return this.httpClient.patch("http://localhost:8000/empresas/" +identificador,json,{headers:headers});   
    }
    obtenerusers():Observable<any>{
      return this.httpClient.get("http://localhost:8000/users");
    }

    
    obtenerUserEmpresa(iduser):Observable<any>{
      return this.httpClient.get("http://localhost:8000/users/"+iduser+"/empresas");
    }
}
