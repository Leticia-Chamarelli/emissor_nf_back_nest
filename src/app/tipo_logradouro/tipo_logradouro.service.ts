import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateTipoLogradouroDto } from './dto/create-tipo_logradouro.dto';
import { UpdateTipoLogradouroDto } from './dto/update-tipo_logradouro.dto';
import { TipoLogradouroEntity } from './tipo_logradouro.entity';

@Injectable()
export class TipoLogradouroService {
  constructor(
    @InjectRepository(TipoLogradouroEntity)
    private readonly tipologradouroRepository: Repository<TipoLogradouroEntity>,
  ) {}

  async findAll() {
    return await this.tipologradouroRepository.find({
      select: ['id', 'descricao'],
    });
  }

  async findOneOrFail(
    conditions: FindConditions<TipoLogradouroEntity>,
    options?: FindOneOptions<TipoLogradouroEntity>,
  ) {
    try {
      return await this.tipologradouroRepository.findOneOrFail(
        conditions,
        options,
      );
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateTipoLogradouroDto) {
    const tipologradouro = this.tipologradouroRepository.create({
      descricao: data.descricao,
    });
    return await this.tipologradouroRepository.save(tipologradouro);
  }

  async update(id: string, data: UpdateTipoLogradouroDto) {
    const tipologradouro = await this.findOneOrFail({ id });
    // Atribua o valor de 'descricao' do objeto 'data' ao objeto 'tipologradouro'
    tipologradouro.descricao = data.descricao;
    return await this.tipologradouroRepository.save(tipologradouro);
  }

  async destroy(id: string) {
    await this.tipologradouroRepository.findOneOrFail({ id });
    this.tipologradouroRepository.softDelete({ id });
  }
}
