import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './model/Usuario';
import { AuthService } from './service/auth.service';
import { TasksController } from './controller/tasks.controller';
import { TasksService } from './service/tasks.service';
import { Tarea } from './model/Tarea';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'nestuser',
        password: 'passuser',
        database: 'tasks',
        entities: [Tarea, Usuario],
        synchronize: false,
    }),
    TypeOrmModule.forFeature([Usuario, Tarea]),
  ],
  controllers: [AuthController, TasksController],
  providers: [AuthService, TasksService],
})
export class AppModule {}
