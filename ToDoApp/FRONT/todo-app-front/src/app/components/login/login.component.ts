import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { RouterModule, Router } from '@angular/router';
import { Usuario } from '../../model/Usuario';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  nombre:string;
  contra:string;

  constructor(private log :LoginService, private router: Router){}

  login(){
    this.log.findUsu(this.nombre,this.contra).subscribe(
      {
        next: (usuario: Usuario) => {
          console.log('Usuario:', usuario);
          localStorage.setItem('usuario', JSON.stringify(usuario))
          this.goToHome();
          // Aquí puedes guardar usuario o hacer redirección, etc.
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
