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
      return null;
    }
  }
  removeUsuario():void{
    this.usuario = null;
  }
}
