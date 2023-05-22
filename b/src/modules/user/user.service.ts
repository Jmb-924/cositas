import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { plainToClass } from 'class-transformer';


@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  createUser(user: CreateUserDto): Promise<User> {
   const newUser = this.userRepository.create(plainToClass(User, user));
   return this.userRepository.save(newUser);
  }

  getUsers(): Promise<User[]> {
   return this.userRepository.find({
      relations: ["rolUser"],
   });
  }
}