import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrearTareaDto } from 'src/dto/crearTareaDto';
import { ObtenerTareaDto } from 'src/dto/obtenerTareaDto';
import { Tarea } from 'src/model/Tarea';
import { Repository } from 'typeorm';


@Injectable()
export class TasksService {
  
  constructor(@InjectRepository(Tarea) private tareaRepository:Repository<Tarea>){}


  async createTask(crearTareaDto: CrearTareaDto): Promise<boolean> {
    const nuevaTarea = this.tareaRepository.create(crearTareaDto);
    await this.tareaRepository.save(nuevaTarea);
    return true;
  }
  async findAllByUserId(userId: number) {
    const result = await this.tareaRepository.findBy({ usuario_id: userId })
    return result.map(el => new ObtenerTareaDto(el.tarea_id, el.titulo, el.descripcion, el.fecha))
  }


  async update(id: number, newTask: CrearTareaDto): Promise<Tarea | null> {
    const tarea = await this.tareaRepository.findOneBy({ tarea_id: id });
    if (!tarea) {
      return null;
    }
    this.tareaRepository.merge(tarea, newTask);
    return this.tareaRepository.save(tarea);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.tareaRepository.delete({ tarea_id: id });
    return result.affected !== 0;
  }
}

