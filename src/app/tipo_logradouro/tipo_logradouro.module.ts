import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoLogradouroController } from './tipo_logradouro.controller';
import { TipoLogradouroEntity } from './tipo_logradouro.entity';
import { TipoLogradouroService } from './tipo_logradouro.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipoLogradouroEntity])],
  controllers: [TipoLogradouroController],
  providers: [TipoLogradouroService],
  exports: [TipoLogradouroService],
})
export class TipoLogradouroModule {}
