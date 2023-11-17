import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateTipoPessoaDto } from './dto/create-tipo_pessoa.dto';
import { UpdateTipoPessoaDto } from './dto/update-tipo_pessoa.dto';
import { TipoPessoaEntity } from './tipo_pessoa.entity';

@Injectable()
export class TipoPessoaService {
  constructor(
    @InjectRepository(TipoPessoaEntity)
    private readonly tipopessoaRepository: Repository<TipoPessoaEntity>,
  ) {}

  async findAll() {
    return await this.tipopessoaRepository.find({
      select: ['id', 'descricao'],
    });
  }

  async findOneOrFail(
    conditions: FindConditions<TipoPessoaEntity>,
    options?: FindOneOptions<TipoPessoaEntity>,
  ) {
    try {
      return await this.tipopessoaRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateTipoPessoaDto) {
    const tipopessoa = this.tipopessoaRepository.create({
      descricao: data.descricao,
    });
    return await this.tipopessoaRepository.save(tipopessoa);
  }

  async update(id: string, data: UpdateTipoPessoaDto) {
    const tipopessoa = await this.findOneOrFail({ id });
    tipopessoa.descricao = data.descricao;
    return await this.tipopessoaRepository.save(tipopessoa);
  }

  async destroy(id: string) {
    await this.tipopessoaRepository.findOneOrFail({ id });
    this.tipopessoaRepository.softDelete({ id });
  }
}
