import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMensajeDto } from 'src/dto/CreateMensajeDto';
import { Mensaje } from 'src/entities/mensaje.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MensajesService {
    constructor(
        @InjectRepository(Mensaje)
        private readonly mensajeRepository: Repository<Mensaje>,
    ){}
    
    async getAll(): Promise<Mensaje[]>{
        return await this.mensajeRepository.find();
    }

    async createMensaje(mensajeNuevo: CreateMensajeDto): Promise<Mensaje>{
        const nuevo = new Mensaje();
        nuevo.mensaje = mensajeNuevo.mensaje;
        nuevo.nick = mensajeNuevo.nick;

        return this.mensajeRepository.save(nuevo); //Guarda mensaje
    }

    async updateMensaje(idMensaje: number, mensajeActualizar: CreateMensajeDto): Promise<Mensaje>{
        const mensajeUpdate = await this.mensajeRepository.findOne(idMensaje);
        mensajeUpdate.nick = mensajeActualizar.nick;
        mensajeUpdate.mensaje = mensajeActualizar.mensaje;

        return await this.mensajeRepository.save(mensajeUpdate);
    }

    async delete(idMensaje: number): Promise<any>{
        return await this.mensajeRepository.delete(idMensaje);
    }
}
