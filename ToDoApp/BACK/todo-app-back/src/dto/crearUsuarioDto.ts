import { ApiProperty } from "@nestjs/swagger";

export class CrearUsuarioDto{

  @ApiProperty({ example: 'franmpdev'})
  nombre: string;
  @ApiProperty({ example: 'franmpdevpass1234'})
  contraseña: string;
  @ApiProperty({ example: '2023-06-10'})
  fecha_creacion: string;

  constructor(nombre: string, contraseña: string, fecha_creacion?: string){
    this.nombre = nombre;
    this.contraseña = contraseña;
    this.fecha_creacion = fecha_creacion;
  }
}