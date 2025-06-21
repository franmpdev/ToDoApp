import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,

} from '@nestjs/common';
import { Response } from 'express';
import { CrearTareaDto } from 'src/dto/crearTareaDto';
import { TasksService } from 'src/service/tasks.service';
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}




  @Get('/allTasks')
  findAll(@Res() res: Response) {
    return res.status(200).json(this.tasksService.findAll());
  }
  @Get('findByUserId/:id')
  findOne(@Param('id') id: number) {
    return this.tasksService.findAllByUserId(id);
  }
  
  @Post('create')
  async createNewTask(@Body() crearTareaDto: CrearTareaDto, @Res() res: Response) {
    const creado = await this.tasksService.createTask(crearTareaDto)
    if(creado){
      return res.status(201).json(creado);
    }else{  
      return res.status(404)
    }
  }
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTareaDto: CrearTareaDto,
  ) {
    const tareaActualizada = await this.tasksService.update(id, updateTareaDto);
    if (tareaActualizada) {
      return tareaActualizada;
    }
    return { message: 'Tarea no encontrada' };
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const eliminado = await this.tasksService.remove(id);
    return { deleted: eliminado };
  }
}