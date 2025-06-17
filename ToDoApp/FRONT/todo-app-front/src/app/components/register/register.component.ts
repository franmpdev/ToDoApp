import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../../service/register.service';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { ObtenerUsuarioDto } from '../../model/obtenerUsuarioDto';
@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  nombre: string = '';
  contrasenha: string = '';
  mensajeError: string="";
  constructor(private registerService:RegisterService,  private router: Router, private userService: UserService){}

  registrarCliente() {
    this.registerService.registrarUsuario(this.nombre, this.contrasenha)
      .subscribe({
        next: (usuario: ObtenerUsuarioDto) => {
          // Guardamos el usuario en UserService
          console.log(usuario)
          this.userService.setUsuario(usuario);

          // Redirigimos a la home o donde necesites
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.mensajeError = 'El nombre introducido ya pertenece a otra cuenta.';
        setTimeout(() => {
          this.mensajeError = '';
          this.nombre='';
          this.contrasenha='';
        }, 3000);
        }
      });
  }
  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
}
