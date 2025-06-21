import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule, MatMenuModule, MatButtonModule],
  templateUrl: './app.component.html',
  styles:[`
    nav {
      padding: 1rem;
      display: flex;
      flex-direction: row-reverse;
    }
  `]
})
export class AppComponent {
  constructor(private router: Router, private userService: UserService){

  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('usuario');
  }
  logout(): void {
    localStorage.removeItem('usuario');
    this.userService.removeUsuario();
  }
  goToHome() {
      this.router.navigate(['/home']);
  }
  goToLogin() {
      this.router.navigate(['/auth/login']);
  }
  goToRegister() {
      this.router.navigate(['/auth/register']);
  }
  goToTasks(){
    this.router.navigate(['tasks'])
  }
  goToCreateTask(){
    this.router.navigate(['createTask'])
  }


}
