import { registerAs } from "@nestjs/config";

//TODO: Archivo que define variables para usar datos almacenados en el archivo .env 
export default registerAs('config', () => {
   return {
      port: process.env.PORT,
      database: {
         host: process.env.DB_HOST,
         port: process.env.DB_PORT,
         name: process.env.DB_NAME,
         user: process.env.DB_USER,
         password: process.env.DB_PASSWORD,
      }
   }
})