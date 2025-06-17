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
import { ObtenerUsuarioDto } from 'src/dto/obtenerUsuarioDto';
import { CrearUsuarioDto } from 'src/dto/crearUsuarioDto';

@Controller('login')
export class LoginController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() user: CrearUsuarioDto, @Res() res: Response):Promise<Response> {
    const usuariocreado: boolean | ObtenerUsuarioDto = await this.userService.create(user);
    if(usuariocreado instanceof ObtenerUsuarioDto){
      return res.status(201).json(usuariocreado);

    }else{
      return res.status(499).json(
      {
        message: 'El usuario ya existe',
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