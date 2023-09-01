import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoBairroController } from './tipo_bairro.controller';
import { TipoBairroEntity } from './tipo_bairro.entity';
import { TipoBairroService } from './tipo_bairro.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipoBairroEntity])],
  controllers: [TipoBairroController],
  providers: [TipoBairroService],
  exports: [TipoBairroService],
})
export class TipoBairroModule {}
