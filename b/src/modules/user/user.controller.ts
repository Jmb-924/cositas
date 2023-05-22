import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { ApiTags } from '@nestjs/swagger';

//* Titulo que muestra en swagger
@ApiTags('User')
@Controller('user')
export class UserController {
   constructor(private userService: UserService) {}

   // http://localhost:3000/api/user/
   @Get()
   async getUsers() {
      return await this.userService.getUsers();
   }

   // http://localhost:3000/api/user/
   @Post()
   async createUser(@Body() user: CreateUserDto) {
      return await this.userService.createUser(user);
   }
}
