import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';  //importamos

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

 

//inyectamos HttpClient en el constructo
constructor(private httpClient:HttpClient) { }
// estos son los eventos o funciones
// apartir de aqui recibimoc los datos desde las apis rest

obtener():Observable<any>{
     return this.httpClient.get("http://localhost:8000/productos");
}
obtenercategoriadeempresas(identificador:any):Observable<any>{
  return this.httpClient.get("http://localhost:8000/empresas/"+ identificador + "/categorias");
}
obtenerproductosdeempresas(identificador:any):Observable<any>{
  return this.httpClient.get("http://localhost:8000/empresas/" + identificador + "/productos");
}
agregar(formData,empresa,categoria){

  return this.httpClient.post("http://localhost:8000/empresas/" + empresa +"/categorias/"+categoria+"/productos",formData)
}
  handleError(e: any) {
    throw new Error("Method not implemented.");
  }
eliminar(identificador):Observable<any>{
  return this.httpClient.delete("http://localhost:8000/productos/" + identificador);
   
}
actualizar(empresa,categoria,productoid,producto):Observable<any>{
  let json = JSON.stringify(producto);
  let headers= new HttpHeaders().set('content-Type','applicatios/json');
  return this.httpClient.patch("http://localhost:8000/empresas/" + empresa+"/categorias/"+categoria+"/productos/"+productoid,json,{headers:headers});   
}

}
 