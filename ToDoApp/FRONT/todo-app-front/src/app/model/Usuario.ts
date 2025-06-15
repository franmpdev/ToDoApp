export class Usuario {
  usuario_id: number;
  nombre: string;
  contraseña: string;

  constructor(usuario_id: number, nombre: string, contraseña: string) {
    this.usuario_id = usuario_id;
    this.nombre = nombre;
    this.contraseña = contraseña;
  }
}
