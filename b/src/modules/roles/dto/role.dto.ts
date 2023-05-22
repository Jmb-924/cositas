import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

//! Los datos de los DTO's deben llamarse igual que en las entidades
export class CreateRoleDto {
   //* Esto son validaciones para los datos que llegan - pueden ver más investigando sobre 'class-validator'
   @IsNotEmpty()
   @IsString()
   //* Esto hace que se vea en la página de swagger
   @ApiProperty()
   nameRol: string;
}

//TODO: De esta forma no es necesario crear dos clases (una de create otra de update)
//TODO: Asi se define que el update va a tener lo mismo que create pero en update pueden llegar nulos
export class UpdateRoleDto extends PartialType(CreateRoleDto) {}
