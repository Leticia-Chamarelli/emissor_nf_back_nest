import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { EstadosEntity } from './estados.entity';

@Injectable()
export class EstadosService {
  constructor(
    @InjectRepository(EstadosEntity)
    private readonly estadosRepository: Repository<EstadosEntity>,
  ) {}

  async findAll() {
    return await this.estadosRepository.find({
      select: ['id', 'nome'],
    });
  }

  async findOneOrFail(
    conditions: FindConditions<EstadosEntity>,
    options?: FindOneOptions<EstadosEntity>,
  ) {
    try {
      return await this.estadosRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateEstadoDto) {
    const estado = this.estadosRepository.create({
      nome: data.nome,
    });
    return await this.estadosRepository.save(estado);
  }

  async update(id: string, data: UpdateEstadoDto) {
    const estado = await this.findOneOrFail({ id });
    estado.nome = data.nome;
    return await this.estadosRepository.save(estado);
  }

  async destroy(id: string) {
    await this.estadosRepository.findOneOrFail({ id });
    this.estadosRepository.softDelete({ id });
  }
}
