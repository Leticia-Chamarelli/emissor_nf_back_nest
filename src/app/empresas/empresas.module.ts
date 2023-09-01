import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresasController } from './empresas.controller';
import { EmpresasEntity } from './empresas.entity';
import { EmpresasService } from './empresas.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmpresasEntity])],
  controllers: [EmpresasController],
  providers: [EmpresasService],
  exports: [EmpresasService],
})
export class EmpresasModule {}
