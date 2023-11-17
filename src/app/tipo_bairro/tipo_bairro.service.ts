import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateTipoBairroDto } from './dto/create-tipo_bairro.dto';
import { UpdateTipoBairroDto } from './dto/update-tipo_bairro.dto';
import { TipoBairroEntity } from './tipo_bairro.entity';

@Injectable()
export class TipoBairroService {
  constructor(
    @InjectRepository(TipoBairroEntity)
    private readonly tipobairroRepository: Repository<TipoBairroEntity>,
  ) {}

  async findAll() {
    return await this.tipobairroRepository.find({
      select: ['id', 'descricao'],
    });
  }

  async findOneOrFail(
    conditions: FindConditions<TipoBairroEntity>,
    options?: FindOneOptions<TipoBairroEntity>,
  ) {
    try {
      return await this.tipobairroRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateTipoBairroDto) {
    const tipobairro = this.tipobairroRepository.create({
      descricao: data.descricao,
    });
    return await this.tipobairroRepository.save(tipobairro);
  }

  async update(id: string, data: UpdateTipoBairroDto) {
    const tipobairro = await this.findOneOrFail({ id });
    tipobairro.descricao = data.descricao;
    return await this.tipobairroRepository.save(tipobairro);
  }

  async destroy(id: string) {
    await this.tipobairroRepository.findOneOrFail({ id });
    this.tipobairroRepository.softDelete({ id });
  }
}
