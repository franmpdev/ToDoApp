import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { ObtenerUsuarioDto } from '../../model/obtenerUsuarioDto';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  nombre:string;
  contra:string;

  constructor(private log :LoginService, private router: Router, private userService: UserService){}

  login(){
    this.log.findUsu(this.nombre,this.contra)
      .subscribe({
        next: (usuario: ObtenerUsuarioDto) => {
          console.log(usuario)
          localStorage.setItem('usuario', JSON.stringify(usuario));
          this.userService.setUsuario(usuario);

          //Redirigir al home
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Error en login', err);
        }
      }
    );
  }
  goToHome() {
    this.router.navigate(['/home']);
  }


  goToRegister() {
    this.router.navigate(['/auth/register']);
  }

}
