export class ObtenerUsuarioDto{
 
  usuario_id: number;
  nombre: string;
  contraseña: string;
  fecha_creacion: Date;

  constructor(usuario_id: number, nombre: string, contraseña: string, fecha_creacion?: Date){
    this.usuario_id = usuario_id;
    this.nombre = nombre;
    this.contraseña = contraseña;
    this.fecha_creacion = fecha_creacion;
  }

}