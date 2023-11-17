import { IsNotEmpty } from 'class-validator';

export class CreateNotasFiscaisDto {
  @IsNotEmpty()
  empresaIdPrestador: string;

  @IsNotEmpty()
  empresaIdTomador: string;

  @IsNotEmpty()
  intermediarioServicoTipoPessoaId: string;

  @IsNotEmpty()
  intermediarioServicoCpfCnpj: string;

  @IsNotEmpty()
  intermediarioServicoCcm: string;

  @IsNotEmpty()
  intermediarioServicoRazaoSocial: string;

  @IsNotEmpty()
  intermediarioServicoEstadosId: string;

  @IsNotEmpty()
  intermediarioServicoMunicipiosId: string;

  @IsNotEmpty()
  prestacaoServicoExigibilidadeIssId: string;

  @IsNotEmpty()
  prestacaoServicoNumeroProcesso: number;

  @IsNotEmpty()
  prestacaoServicoOptanteSimplesNacional: string;

  @IsNotEmpty()
  prestacaoServicoRegimeEspecialTributacao: string;

  @IsNotEmpty()
  prestacaoServicoIssRetido: string;

  @IsNotEmpty()
  prestacaoServicoValorServico: number;

  @IsNotEmpty()
  prestacaoServicoAliquota: number;

  @IsNotEmpty()
  prestacaoServicoValorIss: number;

  @IsNotEmpty()
  prestacaoServicoValorDeducoes: number;

  @IsNotEmpty()
  prestacaoServicoIncentivoFiscal: string;

  @IsNotEmpty()
  localRealizacaoServicosPaisId: string;

  @IsNotEmpty()
  localRealizacaoServicosEstadoId: string;

  @IsNotEmpty()
  localRealizacaoServicosMunicipioId: string;

  @IsNotEmpty()
  descricaoServicoDiscriminacaoServicos: string;

  @IsNotEmpty()
  descricaoServicoObservacoes: string;

  @IsNotEmpty()
  valoresRetencoesInss: number;

  @IsNotEmpty()
  valoresRetencoesIr: number;

  @IsNotEmpty()
  valoresRetencoesCsll: number;

  @IsNotEmpty()
  valoresRetencoesCofins: number;

  @IsNotEmpty()
  valoresRetencoesPis: number;

  @IsNotEmpty()
  valoresRetencoesOutrasRetencoes: number;

  @IsNotEmpty()
  detalhamentoEspecificoConstrucaoCivilNumeroMatriculaCei: number;

  @IsNotEmpty()
  detalhamentoEspecificoConstrucaoCivilNumeroArt: number;
}
