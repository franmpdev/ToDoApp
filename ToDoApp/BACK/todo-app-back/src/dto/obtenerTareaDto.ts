export class ObtenerTareaDto {
  tarea_id: number;
  titulo: string;
  descripcion: string;
  fecha: Date;
  usuario_id: number;

  constructor(tarea_id?: number, usuario_id?: number, titulo?: string, descripcion?: string, fecha?: Date) {
    this.tarea_id = tarea_id;
    this.usuario_id = usuario_id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fecha = fecha;
  }
}