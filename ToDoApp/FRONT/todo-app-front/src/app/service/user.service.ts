import { Injectable } from '@angular/core';
import { ObtenerUsuarioDto } from '../model/obtenerUsuarioDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usuario: ObtenerUsuarioDto = null;

  constructor() {}

  setUsuario(usuario: ObtenerUsuarioDto): void {
    this.usuario = usuario;
  }

  getUsuario(): ObtenerUsuarioDto | null {
    return this.usuario
  }
  removeUsuario():void{
    this.usuario = null;
  }
}
