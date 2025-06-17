import { Entity, PrimaryColumn, Column, OneToMany} from 'typeorm';
import { Tarea } from './Tarea';

@Entity('usuarios')
export class Usuario {
  @PrimaryColumn({ unique: true })
  usuario_id: number;

  @Column()
  nombre: string;

  @Column()
  contraseña: string;
  @Column()
  fecha_creacion: Date;

  @OneToMany(() => Tarea, tarea => tarea.usuario_id)
  tareas: Tarea[];

  constructor(usuario_id?: number, nombre?: string, contraseña?: string, fecha_creacion?: Date, tareas?: Tarea[]) {
    this.usuario_id = usuario_id;
    this.nombre = nombre;
    this.contraseña = contraseña;
    this.fecha_creacion = fecha_creacion;
    if (tareas) {
      this.tareas = tareas;
    }
  }
}