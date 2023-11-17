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
        'tipoLogradouroId',
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
    const empresa = this.empresasRepository.create({
      apelidoEmpresa: data.apelidoEmpresa,
      tipoPessoaId: data.tipoPessoaId,
      cpfCnpj: data.cpfCnpj,
      ccm: data.ccm,
      razaoSocial: data.razaoSocial,
      municipiosId: data.municipiosId,
      tipoBairroId: data.tipoBairroId,
      bairro: data.bairro,
      tipoLogradouroId: data.tipoLogradouroId,
      logradouro: data.logradouro,
      numero: data.numero,
      cep: data.cep,
      complemento: data.complemento,
      telefone: data.telefone,
      email: data.email,
      enderecoExterior: data.enderecoExterior,
      atividadeId: data.atividadeId,
    });
    return await this.empresasRepository.save(empresa);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: string, data: UpdateEmpresaDto) {
    const empresa = await this.findOneOrFail({ id });
    empresa.apelidoEmpresa = data.apelidoEmpresa;
    empresa.tipoPessoaId = data.tipoPessoaId;
    empresa.cpfCnpj = data.cpfCnpj;
    empresa.ccm = data.ccm;
    empresa.razaoSocial = data.razaoSocial;
    empresa.municipiosId = data.municipiosId;
    empresa.bairro = data.bairro;
    empresa.tipoLogradouroId = data.tipoLogradouroId;
    empresa.logradouro = data.logradouro;
    empresa.numero = data.numero;
    empresa.cep = data.cep;
    empresa.complemento = data.complemento;
    empresa.telefone = data.telefone;
    empresa.email = data.email;
    empresa.enderecoExterior = data.enderecoExterior;
    empresa.atividadeId = data.atividadeId;
    return await this.empresasRepository.save(empresa);
  }

  async destroy(id: string) {
    await this.empresasRepository.findOneOrFail({ id });
    this.empresasRepository.softDelete({ id });
  }
}
