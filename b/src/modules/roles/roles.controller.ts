import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto, UpdateRoleDto,  } from './dto/role.dto';
import { ApiTags } from '@nestjs/swagger';

//* Titulo que muestra en swagger
@ApiTags('Roles')
@Controller('roles')
export class RolesController {
   constructor(private rolService: RolesService) {}

   // http://localhost:3000/api/roles/
   @Get()
   async getRoles() {
      return await this.rolService.getRole();
   }

   // http://localhost:3000/api/roles/
   @Post()
   async createRole(@Body() rol: CreateRoleDto) {
      return await this.rolService.createRol(rol);
   }

   // http://localhost:3000/api/roles/1
   @Delete(":id")
   async deleteRole(@Param('id', ParseIntPipe) id) {
      return await this.rolService.deleteRole(id);
   }
}
