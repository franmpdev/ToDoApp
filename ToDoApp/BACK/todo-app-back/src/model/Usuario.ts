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

  @OneToMany(() => Tarea, tarea => tarea.usuario_id)
  tareas: Tarea[];


  constructor(usuario_id?: number, nombre?: string, contraseña?: string, tareas?: Tarea[]) {
    this.usuario_id = usuario_id;
    this.nombre = nombre;
    this.contraseña = contraseña;
    if (tareas) {
      this.tareas = tareas;
    }
  }
}