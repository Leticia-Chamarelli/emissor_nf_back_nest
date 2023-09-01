import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadosController } from './estados.controller';
import { EstadosEntity } from './estados.entity';
import { EstadosService } from './estados.service';

@Module({
  imports: [TypeOrmModule.forFeature([EstadosEntity])],
  controllers: [EstadosController],
  providers: [EstadosService],
  exports: [EstadosService],
})
export class EstadosModule {}
