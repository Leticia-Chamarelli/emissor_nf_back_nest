import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { PaisEntity } from './pais.entity';

@Injectable()
export class PaisService {
  constructor(
    @InjectRepository(PaisEntity)
    private readonly paisRepository: Repository<PaisEntity>,
  ) {}

  async findAll() {
    return await this.paisRepository.find({
      select: ['id', 'nome'],
    });
  }

  async findOneOrFail(
    conditions: FindConditions<PaisEntity>,
    options?: FindOneOptions<PaisEntity>,
  ) {
    try {
      return await this.paisRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreatePaisDto) {
    const pais = this.paisRepository.create({
      nome: data.nome,
    });
    return await this.paisRepository.save(pais);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: string, data: UpdatePaisDto) {
    const pais = await this.findOneOrFail({ id });
    pais.nome = data.nome;
    return await this.paisRepository.save(pais);
  }

  async destroy(id: string) {
    await this.paisRepository.findOneOrFail({ id });
    this.paisRepository.softDelete({ id });
  }
}
