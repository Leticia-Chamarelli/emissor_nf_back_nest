import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateNotasFiscaisDto } from './dto/create-notas_fiscais.dto';
import { UpdateNotasFiscaisDto } from './dto/update-notas_fiscais.dto';
import { NotasFiscaisEntity } from './notas_fiscais.entity';

@Injectable()
export class NotasFiscaisService {
  constructor(
    @InjectRepository(NotasFiscaisEntity)
    private readonly notasfiscaisRepository: Repository<NotasFiscaisEntity>,
  ) {}

  async findAll() {
    return await this.notasfiscaisRepository.find({
      select: [
        'id',
        'empresa_id_prestador',
        'empresa_id_tomador',
        'intermediario_servico_tipo_pessoa_id',
        'intermediario_servico_cpf_cnpj',
        'intermediario_servico_ccm',
        'intermediario_servico_razao_social',
        'intermediario_servico_estados_id',
        'intermediario_servico_municipios_id',
        'prestacao_servico_exigibilidade_iss_id',
        'prestacao_servico_numero_processo',
        'prestacao_servico_optante_simples_nacional',
        'prestacao_servico_regime_especial_tributacao',
        'prestacao_servico_iss_retido',
        'prestacao_servico_valor_servico',
        'prestacao_servico_aliquota',
        'prestacao_servico_valor_iss',
        'prestacao_servico_valor_deducoes',
        'prestacao_servico_incentivo_fiscal',
        'local_realizacao_servicos_pais_id',
        'local_realizacao_servicos_estado_id',
        'local_realizacao_servicos_municipio_id',
        'descricao_servico_discriminacao_servicos',
        'descricao_servico_observacoes',
        'valores_retencoes_inss',
        'valores_retencoes_ir',
        'valores_retencoes_csll',
        'valores_retencoes_cofins',
        'valores_retencoes_pis',
        'valores_retencoes_outras_retencoes',
        'detalhamento_especifico_construcao_civil_numero_matricula_cei',
        'detalhamento_especifico_construcao_civil_numero_art',
      ],
    });
  }

  async findOneOrFail(
    conditions: FindConditions<NotasFiscaisEntity>,
    options?: FindOneOptions<NotasFiscaisEntity>,
  ) {
    try {
      return await this.notasfiscaisRepository.findOneOrFail(
        conditions,
        options,
      );
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async store(_data: CreateNotasFiscaisDto) {
    const notafiscal = this.notasfiscaisRepository.create();
    return await this.notasfiscaisRepository.save(notafiscal);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: string, _data: UpdateNotasFiscaisDto) {
    const notafiscal = await this.findOneOrFail({ id });
    this.notasfiscaisRepository.merge(notafiscal);
    return await this.notasfiscaisRepository.save(notafiscal);
  }

  async destroy(id: string) {
    await this.notasfiscaisRepository.findOneOrFail({ id });
    this.notasfiscaisRepository.softDelete({ id });
  }
}
