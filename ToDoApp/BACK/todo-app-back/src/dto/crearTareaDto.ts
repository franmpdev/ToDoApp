export class CrearTareaDto {
  usuario_id: number;
  titulo: string;
  descripcion: string;
  fecha: Date;

  constructor(usuario_id?: number, titulo?: string, descripcion?: string, fecha?: Date) {
    this.usuario_id = usuario_id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fecha = fecha;
  }
}