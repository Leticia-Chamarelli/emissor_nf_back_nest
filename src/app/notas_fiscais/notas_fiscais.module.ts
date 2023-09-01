import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotasFiscaisController } from './notas_fiscais.controller';
import { NotasFiscaisEntity } from './notas_fiscais.entity';
import { NotasFiscaisService } from './notas_fiscais.service';

@Module({
  imports: [TypeOrmModule.forFeature([NotasFiscaisEntity])],
  controllers: [NotasFiscaisController],
  providers: [NotasFiscaisService],
  exports: [NotasFiscaisService],
})
export class NotasFiscaisModule {}
