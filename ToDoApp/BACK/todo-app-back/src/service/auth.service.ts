import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/model/Usuario';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario) private userRepository: Repository<Usuario>
  ){}

  async create(usuario: Usuario): Promise<boolean> {
      if (!usuario.nombre || usuario.nombre.trim() === '') {
        return true;
      }
      const usuarioRepetido = await this.userRepository.findOneBy({ nombre: usuario.nombre });
      if (usuarioRepetido) {
        return true;
      }
      await this.userRepository.save(usuario);
      return false;
  }

  async findOne(nombre: string, contraseña: string): Promise<Usuario | Error> {
    const usuario = await this.userRepository.findOneBy({ nombre, contraseña });
    if (usuario) {
      return usuario;
    }
    return new Error('Cuenta no encontrada');
  }

}