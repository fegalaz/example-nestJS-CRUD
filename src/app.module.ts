import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajeControllerController } from './controllers/mensaje-controller.controller';
import { Mensaje } from './entities/mensaje.entity';
import { MensajesService } from './providers/mensajes/mensajes.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'test1',
      password: 'test1',
      database: 'message_db',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Mensaje])
  ],
  controllers: [AppController, MensajeControllerController],
  providers: [AppService, MensajesService],
})
export class AppModule {}

