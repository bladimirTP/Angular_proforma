import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProformadetalleService {

  constructor(private httpClient:HttpClient ) { }


  obtener(identificador):Observable<any>{
    return this.httpClient.get("http://localhost:8000/proformadet/"+identificador+"/detalles");
}

}
