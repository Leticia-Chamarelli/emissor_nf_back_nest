import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';
import { MunicipiosEntity } from './municipios.entity';

@Injectable()
export class MunicipiosService {
  constructor(
    @InjectRepository(MunicipiosEntity)
    private readonly municipiosRepository: Repository<MunicipiosEntity>,
  ) {}

  async findAll() {
    return await this.municipiosRepository.find({
      select: ['id', 'nome', 'estadosId'],
    });
  }

  async findOneOrFail(
    conditions: FindConditions<MunicipiosEntity>,
    options?: FindOneOptions<MunicipiosEntity>,
  ) {
    try {
      return await this.municipiosRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateMunicipioDto) {
    const municipio = this.municipiosRepository.create({
      nome: data.nome,
      estadosId: data.estadosId,
    });
    return await this.municipiosRepository.save(municipio);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: string, data: UpdateMunicipioDto) {
    const municipio = await this.findOneOrFail({ id });
    municipio.nome = data.nome;
    municipio.estadosId = data.estadosId;
    return await this.municipiosRepository.save(municipio);
  }

  async destroy(id: string) {
    await this.municipiosRepository.findOneOrFail({ id });
    this.municipiosRepository.softDelete({ id });
  }
}
