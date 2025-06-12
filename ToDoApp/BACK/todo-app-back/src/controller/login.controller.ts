import {
  Body,
  Controller,
  Get,
  Param,
  Res,
  Post,
} from '@nestjs/common';
//IMPORTANTE IMPORTAR RESPONSE
import { Response } from 'express';
import { UserService } from '../service/user.service';
import { Usuario } from 'src/model/Usuario';

@Controller('login')
export class LoginController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() user: Usuario, @Res() res: Response):Promise<Response> {
    const usuariorepetido = await this.userService.create(user);
    if(usuariorepetido){
      return res.status(499).json(
      {
        message: 'El usuario ya existe',
      });
    }else{
      return res.status(201).json({
        message: 'Usuario creado'
      });
    }
  }

  @Get(':nombre,:contraseña')
  async findOne(@Param('nombre') nombre: string, @Param('contraseña') contraseña: string, @Res() res: Response):Promise<Response> {
    const user = await this.userService.findOne(nombre, contraseña);
    if(user){
      return res.status(200).json(user);
    }else{
      return res.status(499).json({
        message: 'Cuenta no encontrada'
      });
    }
  }
  
}