import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);

   // Ruta inicial: http://localhost:3000/api/
   app.setGlobalPrefix("api");

   // Validación de datos permitidos en al momento de usar DTO's
   app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
   }));

   // Configuración de la vista swagger
   const config = new DocumentBuilder()
      .setTitle("Senastion")
      .setVersion("1.0")
      .build();
   const document = SwaggerModule.createDocument(app, config);
   // Ruta para swagger: http://localhost:3000/docsApi/
   SwaggerModule.setup('docsApi', app, document);

   await app.listen(+process.env.PORT);
}
bootstrap();
