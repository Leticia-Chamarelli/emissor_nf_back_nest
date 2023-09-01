import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateNotasFiscaisDto {
  @IsUUID()
  empresa_id_prestador: string;

  @IsUUID()
  empresa_id_tomador: string;

  @IsUUID()
  intermediario_servico_tipo_pessoa_id: string;

  @IsNotEmpty()
  intermediario_servico_cpf_cnpj: string;

  @IsNotEmpty()
  intermediario_servico_ccm: string;

  @IsNotEmpty()
  intermediario_servico_razao_social: string;

  @IsUUID()
  intermediario_servico_estados_id: string;

  @IsUUID()
  intermediario_servico_municipios_id: string;

  @IsUUID()
  prestacao_servico_exigibilidade_iss_id: string;

  @IsNotEmpty()
  prestacao_servico_numero_processo: number;

  @IsNotEmpty()
  prestacao_servico_optante_simples_nacional: string;

  @IsNotEmpty()
  prestacao_servico_regime_especial_tributacao: string;

  @IsNotEmpty()
  prestacao_servico_iss_retido: string;

  @IsNotEmpty()
  prestacao_servico_valor_servico: number;

  @IsNotEmpty()
  prestacao_servico_aliquota: number;

  @IsNotEmpty()
  prestacao_servico_valor_iss: number;

  @IsNotEmpty()
  prestacao_servico_valor_deducoes: number;

  @IsNotEmpty()
  prestacao_servico_incentivo_fiscal: string;

  @IsUUID()
  local_realizacao_servicos_pais_id: string;

  @IsUUID()
  local_realizacao_servicos_estado_id: string;

  @IsUUID()
  local_realizacao_servicos_municipio_id: string;

  @IsNotEmpty()
  descricao_servico_discriminacao_servicos: string;

  @IsNotEmpty()
  descricao_servico_observacoes: string;

  @IsNotEmpty()
  valores_retencoes_inss: number;

  @IsNotEmpty()
  valores_retencoes_ir: number;

  @IsNotEmpty()
  valores_retencoes_csll: number;

  @IsNotEmpty()
  valores_retencoes_cofins: number;

  @IsNotEmpty()
  valores_retencoes_pis: number;

  @IsNotEmpty()
  valores_retencoes_outras_retencoes: number;

  @IsNotEmpty()
  detalhamento_especifico_construcao_civil_numero_matricula_cei: number;

  @IsNotEmpty()
  detalhamento_especifico_construcao_civil_numero_art: number;
}
