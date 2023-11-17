import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'notas_fiscais' })
export class NotasFiscaisEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', name: 'empresa_id_prestador' })
  empresaIdPrestador: string;

  @Column({ type: 'uuid', name: 'empresa_id_tomador' })
  empresaIdTomador: string;

  @Column({ type: 'uuid', name: 'intermediario_servico_tipo_pessoa_id' })
  intermediarioServicoTipoPessoaId: string;

  @Column({ type: 'varchar', name: 'intermediario_servico_cpf_cnpj' })
  intermediarioServicoCpfCnpj: string;

  @Column({ type: 'varchar', name: 'intermediario_servico_ccm' })
  intermediarioServicoCcm: string;

  @Column({ type: 'varchar', name: 'intermediario_servico_razao_social' })
  intermediarioServicoRazaoSocial: string;

  @Column({ type: 'uuid', name: 'intermediario_servico_estados_id' })
  intermediarioServicoEstadosId: string;

  @Column({ type: 'uuid', name: 'intermediario_servico_municipios_id' })
  intermediarioServicoMunicipiosId: string;

  @Column({ type: 'uuid', name: 'prestacao_servico_exigibilidade_iss_id' })
  prestacaoServicoExigibilidadeIssId: string;

  @Column({ type: 'int', name: 'prestacao_servico_numero_processo' })
  prestacaoServicoNumeroProcesso: number;

  @Column({
    type: 'enum',
    enum: ['SIM', 'NÃO'],
    name: 'prestacao_servico_optante_simples_nacional',
  })
  prestacaoServicoOptanteSimplesNacional: string;

  @Column({
    type: 'enum',
    enum: ['SIM', 'NÃO'],
    name: 'prestacao_servico_regime_especial_tributacao',
  })
  prestacaoServicoRegimeEspecialTributacao: string;

  @Column({
    type: 'enum',
    enum: ['SIM', 'NÃO'],
    name: 'prestacao_servico_iss_retido',
  })
  prestacaoServicoIssRetido: string;

  @Column({ type: 'int', name: 'prestacao_servico_valor_servico' })
  prestacaoServicoValorServico: number;

  @Column({ type: 'int', name: 'prestacao_servico_aliquota' })
  prestacaoServicoAliquota: number;

  @Column({ type: 'int', name: 'prestacao_servico_valor_iss' })
  prestacaoServicoValorIss: number;

  @Column({ type: 'int', name: 'prestacao_servico_valor_deducoes' })
  prestacaoServicoValorDeducoes: number;

  @Column({
    type: 'enum',
    enum: ['SIM', 'NÃO'],
    name: 'prestacao_servico_incentivo_fiscal',
  })
  prestacaoServicoIncentivoFiscal: string;

  @Column({ type: 'uuid', name: 'local_realizacao_servicos_pais_id' })
  localRealizacaoServicosPaisId: string;

  @Column({ type: 'uuid', name: 'local_realizacao_servicos_estado_id' })
  localRealizacaoServicosEstadoId: string;

  @Column({ type: 'uuid', name: 'local_realizacao_servicos_municipio_id' })
  localRealizacaoServicosMunicipioId: string;

  @Column({ type: 'varchar', name: 'descricao_servico_discriminacao_servicos' })
  descricaoServicoDiscriminacaoServicos: string;

  @Column({ type: 'varchar', name: 'descricao_servico_observacoes' })
  descricaoServicoObservacoes: string;

  @Column({ type: 'int', name: 'valores_retencoes_inss' })
  valoresRetencoesInss: number;

  @Column({ type: 'int', name: 'valores_retencoes_ir' })
  valoresRetencoesIr: number;

  @Column({ type: 'int', name: 'valores_retencoes_csll' })
  valoresRetencoesCsll: number;

  @Column({ type: 'int', name: 'valores_retencoes_cofins' })
  valoresRetencoesCofins: number;

  @Column({ type: 'int', name: 'valores_retencoes_pis' })
  valoresRetencoesPis: number;

  @Column({ type: 'int', name: 'valores_retencoes_outras_retencoes' })
  valoresRetencoesOutrasRetencoes: number;

  @Column({
    type: 'int',
    name: 'detalhamento_especifico_construcao_civil_numero_matricula_cei',
  })
  detalhamentoEspecificoConstrucaoCivilNumeroMatriculaCei: number;

  @Column({
    type: 'int',
    name: 'detalhamento_especifico_construcao_civil_numero_art',
  })
  detalhamentoEspecificoConstrucaoCivilNumeroArt: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'datetime',
    precision: 6,
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: string;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'datetime',
    precision: 6,
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: string;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'datetime',
    precision: 6,
    nullable: true,
  })
  deletedAt: string;
}
