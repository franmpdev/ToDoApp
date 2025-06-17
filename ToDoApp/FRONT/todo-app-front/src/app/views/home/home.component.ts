import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ObtenerUsuarioDto } from '../../model/obtenerUsuarioDto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuario: ObtenerUsuarioDto;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }
  obtenerUsuario(): ObtenerUsuarioDto{
    return this.userService.getUsuario();
  }
}
