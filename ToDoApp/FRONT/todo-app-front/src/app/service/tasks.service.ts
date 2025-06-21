import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObtenerTareaDto } from '../model/obtenerTareaDto';
import { CrearTareaDto } from '../model/crearTareaDto';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  url: string = 'http://localhost:3000/tasks';
  tasks: ObtenerTareaDto[] = [];
  constructor(private http: HttpClient) {}

  getTasksByUserId(id: number): Observable<ObtenerTareaDto[]> {
    return this.http.get<ObtenerTareaDto[]>(`${this.url}/findByUserId/${id}`);
  }
  createTask(task: CrearTareaDto): Observable<ObtenerTareaDto> {
    return this.http.post<ObtenerTareaDto>(`${this.url}/create`, task);
  }
  updateTask(id: number, task: ObtenerTareaDto): Observable<ObtenerTareaDto> {
    return this.http.put<ObtenerTareaDto>(`${this.url}/${id}`, task);
  }
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

}
