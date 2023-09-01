import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtividadesController } from './atividades.controller';
import { AtividadesEntity } from './atividades.entity';
import { AtividadesService } from './atividades.service';

@Module({
  imports: [TypeOrmModule.forFeature([AtividadesEntity])],
  controllers: [AtividadesController],
  providers: [AtividadesService],
  exports: [AtividadesService],
})
export class AtividadesModule {}
