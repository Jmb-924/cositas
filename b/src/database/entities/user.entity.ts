import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Role } from './role.entity';

@Entity("users")
export class User {
   @PrimaryGeneratedColumn()
   idUser: number;

   @Column()
   name: string;

   @Column()
   username: string;

   @Column()
   email: string;

   //! Datos en entidades que no lleven el array [] son usados para manejo de datos en relaciones y el nombre usado en DTO's
   @ManyToOne(() => Role, rol => rol.usersRol, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
   @JoinColumn({ name: "idRol" })
   rolUser: Role;
}
