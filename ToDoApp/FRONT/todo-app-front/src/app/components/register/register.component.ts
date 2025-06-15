import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../../service/register.service';
import { Usuario } from '../../model/Usuario';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  nombre: string = '';
  contrasenha: string = '';

  constructor(private registerService:RegisterService,  private router: Router){}

  registrarCliente() {
    this.registerService.registrarUsuario(
      this.nombre,
      this.contrasenha
    ).subscribe({
      next: (response: Usuario) => {
        // Maneja el éxito (puedes mostrar un mensaje o redirigir)
        console.log('Usuario registrado:', response);
      },
      error: (error) => {
        // Maneja el error
        console.error('Error al registrar usuario:', error);
      }
    });
  }
  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
