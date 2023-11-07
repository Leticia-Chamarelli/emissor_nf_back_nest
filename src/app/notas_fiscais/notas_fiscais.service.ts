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
    return await this.notasfiscaisRepository.find();
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

  async store(data: CreateNotasFiscaisDto) {
    const notafiscal = this.notasfiscaisRepository.create({
      empresaIdPrestador: data.empresaIdPrestador,
      empresaIdTomador: data.empresaIdTomador,
      intermediarioServicoTipoPessoaId: data.intermediarioServicoTipoPessoaId,
      intermediarioServicoCpfCnpj: data.intermediarioServicoCpfCnpj,
      intermediarioServicoCcm: data.intermediarioServicoCcm,
      intermediarioServicoRazaoSocial: data.intermediarioServicoRazaoSocial,
      intermediarioServicoEstadosId: data.intermediarioServicoEstadosId,
      intermediarioServicoMunicipiosId: data.intermediarioServicoMunicipiosId,
      prestacaoServicoExigibilidadeIssId:
        data.prestacaoServicoExigibilidadeIssId,
      prestacaoServicoNumeroProcesso: data.prestacaoServicoNumeroProcesso,
      prestacaoServicoOptanteSimplesNacional:
        data.prestacaoServicoOptanteSimplesNacional,
      prestacaoServicoRegimeEspecialTributacao:
        data.prestacaoServicoRegimeEspecialTributacao,
      prestacaoServicoIssRetido: data.prestacaoServicoIssRetido,
      prestacaoServicoValorServico: data.prestacaoServicoValorServico,
      prestacaoServicoAliquota: data.prestacaoServicoAliquota,
      prestacaoServicoValorIss: data.prestacaoServicoValorIss,
      prestacaoServicoValorDeducoes: data.prestacaoServicoValorDeducoes,
      prestacaoServicoIncentivoFiscal: data.prestacaoServicoIncentivoFiscal,
      localRealizacaoServicosPaisId: data.localRealizacaoServicosPaisId,
      localRealizacaoServicosEstadoId: data.localRealizacaoServicosEstadoId,
      localRealizacaoServicosMunicipioId:
        data.localRealizacaoServicosMunicipioId,
      descricaoServicoDiscriminacaoServicos:
        data.descricaoServicoDiscriminacaoServicos,
      descricaoServicoObservacoes: data.descricaoServicoObservacoes,
      valoresRetencoesInss: data.valoresRetencoesInss,
      valoresRetencoesIr: data.valoresRetencoesIr,
      valoresRetencoesCsll: data.valoresRetencoesCsll,
      valoresRetencoesCofins: data.valoresRetencoesCofins,
      valoresRetencoesPis: data.valoresRetencoesPis,
      valoresRetencoesOutrasRetencoes: data.valoresRetencoesOutrasRetencoes,
      detalhamentoEspecificoConstrucaoCivilNumeroMatriculaCei:
        data.detalhamentoEspecificoConstrucaoCivilNumeroMatriculaCei,
      detalhamentoEspecificoConstrucaoCivilNumeroArt:
        data.detalhamentoEspecificoConstrucaoCivilNumeroArt,
    });

    return await this.notasfiscaisRepository.save(notafiscal);
  }

  async update(id: string, data: UpdateNotasFiscaisDto) {
    const notafiscal = await this.findOneOrFail({ id });
    notafiscal.empresaIdPrestador = data.empresaIdPrestador;
    notafiscal.empresaIdTomador = data.empresaIdTomador;
    notafiscal.intermediarioServicoTipoPessoaId =
      data.intermediarioServicoTipoPessoaId;
    notafiscal.intermediarioServicoCpfCnpj = data.intermediarioServicoCpfCnpj;
    notafiscal.intermediarioServicoCcm = data.intermediarioServicoCcm;
    notafiscal.intermediarioServicoRazaoSocial =
      data.intermediarioServicoRazaoSocial;
    notafiscal.intermediarioServicoEstadosId =
      data.intermediarioServicoEstadosId;
    notafiscal.intermediarioServicoMunicipiosId =
      data.intermediarioServicoMunicipiosId;
    notafiscal.prestacaoServicoExigibilidadeIssId =
      data.prestacaoServicoExigibilidadeIssId;
    notafiscal.prestacaoServicoNumeroProcesso =
      data.prestacaoServicoNumeroProcesso;
    notafiscal.prestacaoServicoOptanteSimplesNacional =
      data.prestacaoServicoOptanteSimplesNacional;
    notafiscal.prestacaoServicoRegimeEspecialTributacao =
      data.prestacaoServicoRegimeEspecialTributacao;
    notafiscal.prestacaoServicoIssRetido = data.prestacaoServicoIssRetido;
    notafiscal.prestacaoServicoValorServico = data.prestacaoServicoValorServico;
    notafiscal.prestacaoServicoAliquota = data.prestacaoServicoAliquota;
    notafiscal.prestacaoServicoValorIss = data.prestacaoServicoValorIss;
    notafiscal.prestacaoServicoValorDeducoes =
      data.prestacaoServicoValorDeducoes;
    notafiscal.prestacaoServicoIncentivoFiscal =
      data.prestacaoServicoIncentivoFiscal;
    notafiscal.localRealizacaoServicosPaisId =
      data.localRealizacaoServicosPaisId;
    notafiscal.localRealizacaoServicosEstadoId =
      data.localRealizacaoServicosEstadoId;
    notafiscal.localRealizacaoServicosMunicipioId =
      data.localRealizacaoServicosMunicipioId;
    notafiscal.descricaoServicoDiscriminacaoServicos =
      data.descricaoServicoDiscriminacaoServicos;
    notafiscal.descricaoServicoObservacoes = data.descricaoServicoObservacoes;
    notafiscal.valoresRetencoesInss = data.valoresRetencoesInss;
    notafiscal.valoresRetencoesIr = data.valoresRetencoesIr;
    notafiscal.valoresRetencoesCsll = data.valoresRetencoesCsll;
    notafiscal.valoresRetencoesCofins = data.valoresRetencoesCofins;
    notafiscal.valoresRetencoesPis = data.valoresRetencoesPis;
    notafiscal.valoresRetencoesOutrasRetencoes =
      data.valoresRetencoesOutrasRetencoes;
    notafiscal.detalhamentoEspecificoConstrucaoCivilNumeroMatriculaCei =
      data.detalhamentoEspecificoConstrucaoCivilNumeroMatriculaCei;
    notafiscal.detalhamentoEspecificoConstrucaoCivilNumeroArt =
      data.detalhamentoEspecificoConstrucaoCivilNumeroArt;
    return await this.notasfiscaisRepository.save(notafiscal);
  }

  async destroy(id: string) {
    await this.findOneOrFail({ id });
    this.notasfiscaisRepository.softDelete({ id });
  }
}
