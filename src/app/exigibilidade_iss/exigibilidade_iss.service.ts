import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateExigibilidadeIssDto } from './dto/create-exigibilidade_iss.dto';
import { UpdateExigibilidadeIssDto } from './dto/update-exigibilidade_iss.dto';
import { ExigibilidadeIssEntity } from './exigibilidade_iss.entity';

@Injectable()
export class ExigibilidadeIssService {
  constructor(
    @InjectRepository(ExigibilidadeIssEntity)
    private readonly exigibilidadeissRepository: Repository<ExigibilidadeIssEntity>,
  ) {}

  async findAll() {
    return await this.exigibilidadeissRepository.find({
      select: ['id', 'descricao'],
    });
  }

  async findOneOrFail(
    conditions: FindConditions<ExigibilidadeIssEntity>,
    options?: FindOneOptions<ExigibilidadeIssEntity>,
  ) {
    try {
      return await this.exigibilidadeissRepository.findOneOrFail(
        conditions,
        options,
      );
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateExigibilidadeIssDto) {
    const exigibilidadeiss = this.exigibilidadeissRepository.create({
      descricao: data.descricao,
    });
    return await this.exigibilidadeissRepository.save(exigibilidadeiss);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: string, data: UpdateExigibilidadeIssDto) {
    const exigibilidadeiss = await this.findOneOrFail({ id });
    exigibilidadeiss.descricao = data.descricao;
    return await this.exigibilidadeissRepository.save(exigibilidadeiss);
  }

  async destroy(id: string) {
    await this.exigibilidadeissRepository.findOneOrFail({ id });
    this.exigibilidadeissRepository.softDelete({ id });
  }
}
