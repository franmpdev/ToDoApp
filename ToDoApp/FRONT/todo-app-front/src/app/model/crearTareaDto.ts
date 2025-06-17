export class CrearTareaDto {

  titulo: string;
  descripcion: string;
  fecha: Date;

  constructor(titulo?: string, descripcion?: string, fecha?: Date) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fecha = fecha;
  }
}
