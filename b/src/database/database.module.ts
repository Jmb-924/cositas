import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config';

@Global()
@Module({
   imports: [
      //* Conexión a la base de datos
      TypeOrmModule.forRootAsync({
         useFactory: (configService: ConfigType<typeof config>) => {
            return {
               type: 'mysql',
               host: configService.database.host,
               port: +configService.database.port,
               username: configService.database.user,
               password: configService.database.password,
               database: configService.database.name,
               // entities: [],
               autoLoadEntities: true,
               synchronize: true,
               // logging: true,
            }
         },
         inject: [config.KEY],
      })
   ],
})
export class DatabaseModule { }
