import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'empresas' })
export class EmpresasEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', name: 'apelido_empresa' })
  apelidoEmpresa: string;

  @Column({ type: 'uuid', name: 'tipo_pessoa_id' })
  tipoPessoaId: string;

  @Column({ type: 'varchar', name: 'cpf_cnpj' })
  cpfCnpj: string;

  @Column({ type: 'varchar', name: 'ccm' })
  ccm: string;

  @Column({ type: 'varchar', name: 'razao_social' })
  razaoSocial: string;

  @Column({ type: 'uuid', name: 'municipios_id' })
  municipiosId: string;

  @Column({ type: 'uuid', name: 'tipo_bairro_id' })
  tipoBairroId: string;

  @Column({ type: 'varchar', name: 'bairro' })
  bairro: string;

  @Column({ type: 'uuid', name: 'tipo_logradouro_id' })
  tipoLogradouroId: string;

  @Column({ type: 'varchar', name: 'logradouro' })
  logradouro: string;

  @Column({ type: 'int', name: 'numero' })
  numero: number;

  @Column({ type: 'int', name: 'cep' })
  cep: number;

  @Column({ type: 'varchar', name: 'complemento' })
  complemento: string;

  @Column({ type: 'varchar', name: 'telefone' })
  telefone: string;

  @Column({ type: 'varchar', name: 'email' })
  email: string;

  @Column({ type: 'varchar', name: 'endereco_exterior' })
  enderecoExterior: string;

  @Column({ type: 'uuid', name: 'atividade_id' })
  atividadeId: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
