import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObtenerUsuarioDto } from '../model/obtenerUsuarioDto';
import { CrearUsuarioDto } from '../model/crearUsuarioDto';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url:string = 'http://localhost:3000/login';
  constructor(private http:HttpClient, private userService: UserService) { }

  registrarUsuario(nombre: string, contraseña: string): Observable<any> {
    const fechaCreacion = new Date().toISOString().split('T')[0];
    const nuevoUsuario = new CrearUsuarioDto(nombre, contraseña, fechaCreacion);
    return this.http.post<ObtenerUsuarioDto>(`${this.url}/create`, nuevoUsuario);
  }
}

