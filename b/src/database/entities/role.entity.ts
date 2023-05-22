import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("roles")
export class Role {
   @PrimaryGeneratedColumn()
   idRol: number;

   @Column()
   nameRol: string;

   //! Datos en entidades que lleven un array [] no son usados para manejo de datos en relaciones
   @OneToMany(() => User, (user) => user.rolUser)
   usersRol: User[];
}
