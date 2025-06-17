export class ObtenerTareaDto {
  tarea_id: number;
  titulo: string;
  descripcion: string;
  fecha: Date;
  completed: boolean;

  constructor(tarea_id: number, titulo: string, descripcion?: string, fecha?: Date, completed?: boolean) {
    this.tarea_id = tarea_id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.completed = completed;

  }
}
