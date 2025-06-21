import { Injectable } from '@angular/core';
import { ObtenerUsuarioDto } from '../model/obtenerUsuarioDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuario: any = null;

  constructor() {}

  setUsuario(usuario: ObtenerUsuarioDto): void {
    this.usuario = usuario;
  }

  getUsuario(): ObtenerUsuarioDto | null {

    if(!!this.usuario){
      return this.usuario;
    }
    else{
      this.usuario = JSON.parse(localStorage.getItem('usuario'))
      return this.usuario;
    }
  }
  removeUsuario():void{
    this.usuario = null;
  }
}
