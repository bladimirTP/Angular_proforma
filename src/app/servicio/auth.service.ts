import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UserI} from '../models/user';
import {JwtResponseI} from '../models/jwt-response';
import {tap} from 'rxjs/operators'
import { Observable,BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 AUTH_SERVER: string= 'http://localhost:8000';
 authSubject= new BehaviorSubject(false);
 private token: string;
  constructor(private httpClient:HttpClient) { }
  
  
  register(user:UserI): Observable<JwtResponseI>{// lo registra y lo mantiene logueado
   return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/users`,
   user).pipe(tap(
     (res:JwtResponseI)=>{
       if (res) {
          this.saveToken(res.token,res.expiresIn);
       }
     }
   ))
  }
  login(user:UserI): Observable<JwtResponseI>{ // manda el usuario y contraceña para loguearce
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`,
    user).pipe(tap(
      (res:JwtResponseI)=>{
        if (res) {
            //guardar token
            this.saveToken(res.token,res.expiresIn);
        }
      }
    ))
   }
  
   logaut(): void{ 
     this.token='';
     localStorage.removeItem("ACCESS_TOKEN");
     localStorage.removeItem("EXPIRES_IN");
   }

   private saveToken(token: string,expiresIn:string): void{
    localStorage.setItem("ACCESS_TOKEN",token);
    localStorage.setItem("EXPIRES_IN",expiresIn);
    this.token=token;
   }
   public getToken(): string {
     if (!this.token) {
       this.token=localStorage.getItem("ACCESS_TOKEN");
     }
     return this.token;
   }
}
