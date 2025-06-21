import { Component } from '@angular/core';
import { TasksService } from '../../../service/tasks.service';
import { ObtenerTareaDto } from '../../../model/obtenerTareaDto';
import { UserService } from '../../../service/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mis-tareas',
  imports: [CommonModule, FormsModule],
  templateUrl: './mis-tareas.html',
  styleUrl: './mis-tareas.css'
})
export class MisTareas {
  tasks: ObtenerTareaDto[] = [];
  editandoId: number | null = null;
  tareaEdit: any = {};

  constructor(private tasksService: TasksService, private userService: UserService) {}

  ngOnInit() {
    this.obtenerTareas();
  }

  obtenerTareas() {
    const userId = this.userService.getUsuario().usuario_id;
    this.tasksService.getTasksByUserId(userId).subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        console.log('Tareas obtenidas: ', tasks);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  editarTarea(tarea: any) {
    this.editandoId = tarea.tarea_id;
    this.tareaEdit = { ...tarea };
    if (this.tareaEdit.fecha) {
      this.tareaEdit.fecha = this.tareaEdit.fecha.substring(0, 10);
    }
  }

  guardarEdicion() {
    this.tasksService.updateTask(this.editandoId, this.tareaEdit).subscribe({
      next: () => {
        this.obtenerTareas();
        this.editandoId = null;
        this.tareaEdit = {};
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  cancelarEdicion() {
    this.editandoId = null;
    this.tareaEdit = {};
  }
  toggleCompletada(tarea: any) {
  const tareaActualizada = { ...tarea, completed: !tarea.completed };
  this.tasksService.updateTask(tarea.tarea_id, tareaActualizada).subscribe({
    next: () => {
      tarea.completed = !tarea.completed;
    },
    error: (error) => {
      console.log(error);
    }
  });
}
}
