import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../../service/tasks.service';
import { CrearTareaDto } from '../../../model/crearTareaDto';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-nueva-tarea',
  imports: [CommonModule, FormsModule],
  templateUrl: './nueva-tarea.html',
  styleUrl: './nueva-tarea.css'
})
export class NuevaTarea {
  titulo: string = '';
  descripcion: string = '';
  fecha: Date = null;
  prioridad: string = 'baja';

  constructor(private tasksService: TasksService, private userService: UserService) {}

  crearTarea() {
    const userID = this.userService.getUsuario().usuario_id;
    const nuevaTarea = new CrearTareaDto(this.titulo, this.descripcion, this.fecha, false, userID);
    // Aquí puedes agregar la lógica para guardar la tarea
    this.tasksService.createTask(nuevaTarea).subscribe({
      next: (task) => {
        console.log('Tarea creada:', task);
        //
        this.titulo = '';
        this.descripcion = '';
        this.fecha = null;
        this.prioridad = 'baja';
      },
      error: (error) => {
        console.log('Error al crear la tarea:', error);
      }

  })

  }
}
