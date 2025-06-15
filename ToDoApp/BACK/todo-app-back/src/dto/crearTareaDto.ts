import { ApiProperty } from "@nestjs/swagger";

export class CrearTareaDto {

  @ApiProperty({ example: 1})
  usuario_id: number;

  @ApiProperty({ example: 'Limpieza'})
  titulo: string;

  @ApiProperty({ example: "Limpiar la habitación y el salón"})
  descripcion: string;

  @ApiProperty({ example: "2025-06-10"})
  fecha: Date;

  constructor(usuario_id?: number, titulo?: string, descripcion?: string, fecha?: Date) {
    this.usuario_id = usuario_id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fecha = fecha;
  }
}