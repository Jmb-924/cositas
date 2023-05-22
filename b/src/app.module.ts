import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { RolesModule } from './modules/roles/roles.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AsdModule } from './modules/asd/asd.module';
import { AsdController } from './asd/asd.controller';
import config from './config';

@Module({
   imports: [ConfigModule.forRoot({
      //* Permite las variables de entorno
      isGlobal: true,
      load: [config],
      envFilePath: ".env",
   }), DatabaseModule, UserModule, RolesModule, AsdModule],
   controllers: [AsdController],
   providers: [],
})
export class AppModule { }
