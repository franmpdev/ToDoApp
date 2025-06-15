import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url:string = 'http://localhost:3000/login';
  constructor(private http:HttpClient) { }


  registrarUsuario(nombre: string, contraseña: string): Observable<Usuario | any> {
    const nuevoUsuario = {
      nombre,
      contraseña
    };
    return this.http.post(`${this.url}/create/`, nuevoUsuario);
  }
}
