import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipiosController } from './municipios.controller';
import { MunicipiosEntity } from './municipios.entity';
import { MunicipiosService } from './municipios.service';

@Module({
  imports: [TypeOrmModule.forFeature([MunicipiosEntity])],
  controllers: [MunicipiosController],
  providers: [MunicipiosService],
  exports: [MunicipiosService],
})
export class MunicipiosModule {}
