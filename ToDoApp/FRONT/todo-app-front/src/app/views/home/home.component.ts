import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ObtenerUsuarioDto } from '../../model/obtenerUsuarioDto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../service/tasks.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuario: ObtenerUsuarioDto;
  taskStats: { total: number, completed: number, pending: number } = { total: 0, completed: 0, pending: 0 };

  constructor(private router: Router, private userService: UserService, private tasksService: TasksService) {}

  ngOnInit() {
    let usuario = JSON.parse(localStorage.getItem('usuario'));
    if (this.userService.getUsuario() == null) {
      this.userService.setUsuario(usuario);
    }
    this.usuario = this.userService.getUsuario();
    this.cargarEstadisticas();
  }

  obtenerUsuario(): ObtenerUsuarioDto {
    return this.userService.getUsuario();
  }

  cargarEstadisticas() {
    if (!this.usuario) return;
    this.tasksService.getTasksByUserId(this.usuario.usuario_id).subscribe({
      next: (tasks) => {
        this.taskStats.total = tasks.length;
        this.taskStats.completed = tasks.filter(t => t.completed).length;
        this.taskStats.pending = tasks.filter(t => !t.completed).length;
      },
      error: (error) => {
        this.taskStats = { total: 0, completed: 0, pending: 0 };
      }
    });
  }
  goToNuevaTarea() {
    this.router.navigate(['createTask']);
  }
  goToMisTareas() {
    this.router.navigate(['tasks']);
  }
  goToLogin(){
    this.router.navigate(['/auth/login']);
  }
}
