import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/model/Usuario';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObtenerUsuarioDto } from 'src/dto/obtenerUsuarioDto';
import { CrearUsuarioDto } from 'src/dto/crearUsuarioDto';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Usuario) private userRepository: Repository<Usuario>
  ){}

  async create(usuario: CrearUsuarioDto): Promise< boolean | ObtenerUsuarioDto> {
      if (!usuario.nombre || usuario.nombre.trim() === '') {
        return false;
      }
      const usuarioRepetido = await this.userRepository.findOneBy({ nombre: usuario.nombre });
      if ( usuarioRepetido instanceof Usuario ) {
        return false;
      }
      else{
        const usuariocreado = await this.userRepository.save(usuario)
        const usuarioencontrado :Usuario = await this.userRepository.findOneBy({ nombre: usuariocreado.nombre, contraseña: usuariocreado.contraseña });
        return new ObtenerUsuarioDto(
          usuarioencontrado.usuario_id,
          usuarioencontrado.nombre,
          usuarioencontrado.contraseña,
          usuarioencontrado.fecha_creacion
        );
      }


  }

  async findOne(nombre: string, contraseña: string): Promise<ObtenerUsuarioDto | Error> {
    const usuario = await this.userRepository.findOneBy({ nombre, contraseña });
    if (usuario) {
      return new ObtenerUsuarioDto(
        usuario.usuario_id,
        usuario.nombre,
        usuario.contraseña
      );
    }
    return new Error('Cuenta no encontrada');
  }

}