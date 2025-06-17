export class CrearUsuarioDto{

  nombre: string;
  contraseña: string;
  fecha_creacion: string;

  constructor(nombre: string, contraseña: string, fecha_creacion?: string){
    this.nombre = nombre;
    this.contraseña = contraseña;
    this.fecha_creacion = fecha_creacion;
  }
}
