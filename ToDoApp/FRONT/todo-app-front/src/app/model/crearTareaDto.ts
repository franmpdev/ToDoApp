export class CrearTareaDto {

  titulo: string;
  descripcion: string;
  fecha: Date;
  completed: boolean;
  usuario_id: number;



  constructor(titulo?: string, descripcion?: string, fecha?: Date, completed?: boolean, usuario_id?: number) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.completed = completed;
    this.usuario_id = usuario_id;

  }
}
