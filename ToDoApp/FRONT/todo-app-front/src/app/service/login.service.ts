import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string = 'http://localhost:3000/login';
  constructor(private http:HttpClient) { }


  findUsu(nombre:string,contra:string):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/${nombre},${contra}`);
  }
}
