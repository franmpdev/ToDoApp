import { ApiProperty } from "@nestjs/swagger";


export class CrearTareaDto {
  @ApiProperty({ example: 'Limpieza'})
  titulo: string;
  @ApiProperty({ example: "Limpiar la habitación y el salón"})
  descripcion: string;
  @ApiProperty({ example: "2025-06-10"})
  fecha: Date;
  @ApiProperty({ example: false})
  completed: boolean;
  @ApiProperty({ example: 1})
  usuario_id: number;

  constructor(titulo?: string, descripcion?: string, fecha?: Date, completed?: boolean, usuario_id?: number) {

    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.completed = completed;
    this.usuario_id = usuario_id;

  }
}