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

  @Column({ type: 'int', name: 'empresa_id_prestador' })
  empresa_id_prestador: number;

  @Column({ type: 'int', name: 'empresa_id_tomador' })
  empresa_id_tomador: number;

  @Column({ type: 'int', name: 'intermediario_servico_tipo_pessoa_id' })
  intermediario_servico_tipo_pessoa_id: number;

  @Column({ type: 'varchar', name: 'intermediario_servico_cpf_cnpj' })
  intermediario_servico_cpf_cnpj: string;

  @Column({ type: 'varchar', name: 'intermediario_servico_ccm' })
  intermediario_servico_ccm: string;

  @Column({ type: 'varchar', name: 'intermediario_servico_razao_social' })
  intermediario_servico_razao_social: string;

  @Column({ type: 'int', name: 'intermediario_servico_estados_id' })
  intermediario_servico_estados_id: number;

  @Column({ type: 'int', name: 'intermediario_servico_municipios_id' })
  intermediario_servico_municipios_id: number;

  @Column({ type: 'int', name: 'prestacao_servico_exigibilidade_iss_id' })
  prestacao_servico_exigibilidade_iss_id: number;

  @Column({ type: 'int', name: 'prestacao_servico_numero_processo' })
  prestacao_servico_numero_processo: number;

  @Column({
    type: 'enum',
    enum: ['SIM', 'NÃO'],
    name: 'prestacao_servico_optante_simples_nacional',
  })
  prestacao_servico_optante_simples_nacional: string;

  @Column({
    type: 'enum',
    enum: ['SIM', 'NÃO'],
    name: 'prestacao_servico_regime_especial_tributacao',
  })
  prestacao_servico_regime_especial_tributacao: string;

  @Column({
    type: 'enum',
    enum: ['SIM', 'NÃO'],
    name: 'prestacao_servico_iss_retido',
  })
  prestacao_servico_iss_retido: string;

  @Column({ type: 'int', name: 'prestacao_servico_valor_servico' })
  prestacao_servico_valor_servico: number;

  @Column({ type: 'int', name: 'prestacao_servico_aliquota' })
  prestacao_servico_aliquota: number;

  @Column({ type: 'int', name: 'prestacao_servico_valor_iss' })
  prestacao_servico_valor_iss: number;

  @Column({ type: 'int', name: 'prestacao_servico_valor_deducoes' })
  prestacao_servico_valor_deducoes: number;

  @Column({
    type: 'enum',
    enum: ['SIM', 'NÃO'],
    name: 'prestacao_servico_incentivo_fiscal',
  })
  prestacao_servico_incentivo_fiscal: string;

  @Column({ type: 'int', name: 'local_realizacao_servicos_pais_id' })
  local_realizacao_servicos_pais_id: number;

  @Column({ type: 'varchar', name: 'local_realizacao_servicos_estado_id' })
  local_realizacao_servicos_estado_id: string;

  @Column({ type: 'varchar', name: 'local_realizacao_servicos_municipio_id' })
  local_realizacao_servicos_municipio_id: string;

  @Column({ type: 'varchar', name: 'descricao_servico_discriminacao_servicos' })
  descricao_servico_discriminacao_servicos: string;

  @Column({ type: 'varchar', name: 'descricao_servico_observacoes' })
  descricao_servico_observacoes: string;

  @Column({ type: 'int', name: 'valores_retencoes_inss' })
  valores_retencoes_inss: number;

  @Column({ type: 'int', name: 'valores_retencoes_ir' })
  valores_retencoes_ir: number;

  @Column({ type: 'int', name: 'valores_retencoes_csll' })
  valores_retencoes_csll: number;

  @Column({ type: 'int', name: 'valores_retencoes_cofins' })
  valores_retencoes_cofins: number;

  @Column({ type: 'int', name: 'valores_retencoes_pis' })
  valores_retencoes_pis: number;

  @Column({ type: 'int', name: 'valores_retencoes_outras_retencoes' })
  valores_retencoes_outras_retencoes: number;

  @Column({
    type: 'int',
    name: 'detalhamento_especifico_construcao_civil_numero_matricula_cei',
  })
  detalhamento_especifico_construcao_civil_numero_matricula_cei: number;

  @Column({
    type: 'int',
    name: 'detalhamento_especifico_construcao_civil_numero_art',
  })
  detalhamento_especifico_construcao_civil_numero_art: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
