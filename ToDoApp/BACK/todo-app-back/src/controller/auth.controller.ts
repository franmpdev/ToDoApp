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
import { AuthService } from '../service/auth.service';
import { Usuario } from 'src/model/Usuario';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('create')
  async create(@Body() user: Usuario, @Res() res: Response):Promise<Response> {
    const usuariorepetido = await this.authService.create(user);
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

  @Get('buscar/:nombre,:contraseña')
  async findOne(@Param('nombre') nombre: string, @Param('contraseña') contraseña: string, @Res() res: Response):Promise<Response> {
    const user = await this.authService.findOne(nombre, contraseña);
    if(user){
      return res.status(200).json(user);
    }else{
      return res.status(499).json({
        message: 'Cuenta no encontrada'
      });
    }
  }
  
}