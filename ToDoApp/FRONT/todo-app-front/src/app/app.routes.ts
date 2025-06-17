
import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AuthComponent } from './views/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MisTareas } from './views/tasks/mis-tareas/mis-tareas';
import { NuevaTarea } from './views/tasks/nueva-tarea/nueva-tarea';

export const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: 'tasks',
    component: MisTareas
  },
  {
    path: 'createTask',
    component: NuevaTarea
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
