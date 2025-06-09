import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,

} from '@nestjs/common';
import { CrearTareaDto } from 'src/dto/crearTareaDto';
import { TasksService } from 'src/service/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}





  @Get('findByUserId/:id')
  findOne(@Param('id') id: number) {
    return this.tasksService.findAllByUserId(id);
  }
  
  @Post('create')
  async createNewTask(@Body() crearTareaDto: CrearTareaDto) {
    const creado = await this.tasksService.createTask(crearTareaDto)
    if(creado){
      return crearTareaDto;
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