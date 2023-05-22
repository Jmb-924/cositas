import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { DatabaseModule } from './db/database.module';

@Module({
  imports: [ConfigModule.forRoot({
   isGlobal: true,
   load: [config],
   envFilePath: ".env",
  }), DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
