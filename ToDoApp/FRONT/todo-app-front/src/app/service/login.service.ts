import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObtenerUsuarioDto } from '../model/obtenerUsuarioDto';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string = 'http://localhost:3000/login';
  constructor(private http:HttpClient, private userService: UserService) { }


  findUsu(nombre:string,contra:string):Observable<ObtenerUsuarioDto>{
    const usuario = this.http.get<ObtenerUsuarioDto>(`${this.url}/${nombre},${contra}`);
    usuario.subscribe(usuario => {
      this.userService.setUsuario(usuario);

    })
    return usuario;

  }
}
