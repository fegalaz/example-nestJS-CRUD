import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { response } from 'express';
import { CreateMensajeDto } from 'src/dto/CreateMensajeDto';
import { MensajesService } from 'src/providers/mensajes/mensajes.service';
import { resolve } from 'url';

@Controller('mensaje-controller')
export class MensajeControllerController {

    constructor(private mensajeService: MensajesService){
    
    }

    @Post()
    create (@Body() createMensajeDTO: CreateMensajeDto,@Res() response){
         this.mensajeService.createMensaje(createMensajeDTO).then(mensaje => {
            response.status(HttpStatus.CREATED).json(mensaje);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: "Error en la creacion del mensaje"})
        });
    }

    @Get()
    getAll(@Res() response){
        this.mensajeService.getAll().then(mensajeList => {
            response.status(HttpStatus.OK).json(mensajeList);
        }).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: "Error en la obtencion del mensaje"})
        });
    }

    @Put(':id')
    update (@Body() updateMensajeDto: CreateMensajeDto , @Res() response,@Param('id') idMensaje){
        this.mensajeService.updateMensaje(idMensaje, updateMensajeDto).then(mensaje =>{
            response.statu(HttpStatus.OK).json(mensaje);
        }).catch(() =>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje:"Error en la actualizacion del mensaje"});
        });
    }

    @Delete(':id')
    delete(@Res() response,@Param('id') idMensaje) {
        this.mensajeService.delete(idMensaje).then(res =>{
            response.statu(HttpStatus.OK).json(resolve);
        }).catch(() =>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje:"Error en la eliminacion del mensaje"});
        });
    }
}
