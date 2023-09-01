import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExigibilidadeIssController } from './exigibilidade_iss.controller';
import { ExigibilidadeIssEntity } from './exigibilidade_iss.entity';
import { ExigibilidadeIssService } from './exigibilidade_iss.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExigibilidadeIssEntity])],
  controllers: [ExigibilidadeIssController],
  providers: [ExigibilidadeIssService],
  exports: [ExigibilidadeIssService],
})
export class ExigibilidadeIssModule {}
