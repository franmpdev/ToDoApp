import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { Usuario } from './Usuario';

@Entity('tareas')
export class Tarea {
  @PrimaryColumn({ unique: true })
  tarea_id: number;

  @Column()
  titulo: string;

  @Column()
  descripcion: string;

  @Column()
  fecha: Date;

  @Column()
  completed: boolean;
  
  @Column()
  usuario_id: number;


  @ManyToOne(() => Usuario, usuario => usuario.usuario_id)
  @JoinColumn({ name: 'usuario_id' }) 
  usuario: Usuario;

  constructor(id_tarea?: number, titulo?: string, descripcion?: string, fecha?: Date, completed?: boolean, usuario?: Usuario) {
    this.tarea_id = id_tarea;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.completed = completed;
    this.usuario = usuario;
    if(usuario){
      this.usuario_id = usuario.usuario_id;
    }
  }
}