import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaisController } from './pais.controller';
import { PaisEntity } from './pais.entity';
import { PaisService } from './pais.service';

@Module({
  imports: [TypeOrmModule.forFeature([PaisEntity])],
  controllers: [PaisController],
  providers: [PaisService],
  exports: [PaisService],
})
export class PaisModule {}
