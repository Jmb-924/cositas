import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/database/entities/role.entity';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/role.dto';
import { plainToClass } from 'class-transformer';


@Injectable()
export class RolesService {
   constructor(@InjectRepository(Role) private rolRepository: Repository<Role>) {}

   createRol(rol: CreateRoleDto): Promise<Role> {
      const newRol = this.rolRepository.create(plainToClass(Role, rol));
      return this.rolRepository.save(newRol);
   }

   getRole(): Promise<Role[]> {
      return this.rolRepository.find()
   }

   deleteRole(idRol: number) {
      this.rolRepository.delete(idRol)
      return "Rol Eliminado"
   }
}
