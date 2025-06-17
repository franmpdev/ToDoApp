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


  findUsu(nombre:string,contra:string):Observable<any>{
    return this.http.get<ObtenerUsuarioDto>(`${this.url}/${nombre},${contra}`);
  }
}
