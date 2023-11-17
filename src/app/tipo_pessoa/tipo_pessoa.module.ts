import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoPessoaController } from './tipo_pessoa.controller';
import { TipoPessoaEntity } from './tipo_pessoa.entity';
import { TipoPessoaService } from './tipo_pessoa.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipoPessoaEntity])],
  controllers: [TipoPessoaController],
  providers: [TipoPessoaService],
  exports: [TipoPessoaService],
})
export class TipoPessoaModule {}
