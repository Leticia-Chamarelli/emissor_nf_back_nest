import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { EmpresasEntity } from './empresas.entity';

@Injectable()
export class EmpresasService {
  constructor(
    @InjectRepository(EmpresasEntity)
    private readonly empresasRepository: Repository<EmpresasEntity>,
  ) {}

  async findAll() {
    return await this.empresasRepository.find({
      select: [
        'id',
        'apelidoEmpresa',
        'tipoPessoaId',
        'cpfCnpj',
        'ccm',
        'razaoSocial',
        'municipiosId',
        'tipoBairroId',
        'bairro',
        'tipoLogradouro',
        'logradouro',
        'numero',
        'cep',
        'complemento',
        'telefone',
        'email',
        'enderecoExterior',
        'atividadeId',
        'createdAt',
        'updatedAt',
        'deletedAt',
      ],
    });
  }

  async findOneOrFail(
    conditions: FindConditions<EmpresasEntity>,
    options?: FindOneOptions<EmpresasEntity>,
  ) {
    try {
      return await this.empresasRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateEmpresaDto) {
    const empresa = this.empresasRepository.create();
    return await this.empresasRepository.save(empresa);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: string, data: UpdateEmpresaDto) {
    const empresa = await this.findOneOrFail({ id });
    this.empresasRepository.merge(empresa);
    return await this.empresasRepository.save(empresa);
  }

  async destroy(id: string) {
    await this.empresasRepository.findOneOrFail({ id });
    this.empresasRepository.softDelete({ id });
  }
}
