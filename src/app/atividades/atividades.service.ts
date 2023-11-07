import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import { AtividadesEntity } from './atividades.entity';

@Injectable()
export class AtividadesService {
  constructor(
    @InjectRepository(AtividadesEntity)
    private readonly atividadesRepository: Repository<AtividadesEntity>,
  ) {}

  async findAll() {
    return await this.atividadesRepository.find({
      select: ['id', 'descricao', 'codigo'],
    });
  }

  async findOneOrFail(
    conditions: FindConditions<AtividadesEntity>,
    options?: FindOneOptions<AtividadesEntity>,
  ) {
    try {
      return await this.atividadesRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateAtividadeDto) {
    const atividades = this.atividadesRepository.create({
      codigo: data.codigo,
      descricao: data.descricao,
    });
    return await this.atividadesRepository.save(atividades);
  }

  async update(id: string, data: UpdateAtividadeDto) {
    const atividades = await this.findOneOrFail({ id });
    atividades.descricao = data.descricao;
    return await this.atividadesRepository.save(atividades);
  }

  async destroy(id: string) {
    await this.atividadesRepository.findOneOrFail({ id });
    this.atividadesRepository.softDelete({ id });
  }
}
