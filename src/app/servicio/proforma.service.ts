import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProformaService {

  constructor(private httpClient:HttpClient ) {

   }

   obtener(identificador:any):Observable<any>{
    return this.httpClient.get("http://localhost:8000/empresas/"+identificador+"/proformas");
   }

   obtenerdetalle(identificador:any):Observable<any>{
    return this.httpClient.get("http://localhost:8000/proformadet/"+identificador+"/detalles");
   }

}
