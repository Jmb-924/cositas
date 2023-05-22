import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config';
import { AprendicesEntity, ArchivosProyectoEntity, ComiteEntity, CompetenciaEntity, DecisionesComiteEntity, EntregaFichaEntity, EstadoDecisionEntity, EstadoQuejasEntity, FichasEntity, GruposProyectoEntity, MotivosComiteEntity, ObservacionesAprendizEntity, PCAEntity, PermisosEntity, PlanMejoramientoEntity, ProgramasFormativosEntity, QuejasComiteEntity, ResultadoAprendizajeEntity, RolesEntity, RolesPermisosEntity, TipoDocumentoEntity, UsuariosEntity } from './entities';

const entities = [TipoDocumentoEntity, RolesEntity, PermisosEntity, RolesPermisosEntity, EstadoDecisionEntity, MotivosComiteEntity, EstadoQuejasEntity, DecisionesComiteEntity, ProgramasFormativosEntity, CompetenciaEntity, ResultadoAprendizajeEntity, FichasEntity, UsuariosEntity, AprendicesEntity, PCAEntity, EntregaFichaEntity, ObservacionesAprendizEntity, QuejasComiteEntity, ComiteEntity, PlanMejoramientoEntity, GruposProyectoEntity, ArchivosProyectoEntity];

@Global()
@Module({
   imports: [
      TypeOrmModule.forRootAsync({
         useFactory: (configService: ConfigType<typeof config>) => {
            const { host, port, user, password, name } = configService.database;
            return {
               type: 'mysql',
               host: host,
               port: +port,
               username: user,
               password: password,
               //TODO: Base de Datos "senastion"
               database: name,
               entities: [...entities],
               autoLoadEntities: true,
               //TODO: Después de iniciar una vez, cambiar a "synchronize: false"
               synchronize: true,
               // logging: true,
            }
         },
         inject: [config.KEY],
      })
   ],
})
export class DatabaseModule { }