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

  @Column({ type: 'int', name: 'municipios_id' })
  municipiosId: number;

  @Column({ type: 'int', name: 'tipo_bairro_id' })
  tipoBairroId: number;

  @Column({ type: 'varchar', name: 'bairro' })
  bairro: string;

  @Column({ type: 'int', name: 'tipo_logradouro' })
  tipoLogradouro: number;

  @Column({ type: 'varchar', name: 'logradouro' })
  logradouro: string;

  @Column({ type: 'int', name: 'numero' })
  numero: number;

  @Column({ type: 'int', name: 'cep' })
  cep: number;

  @Column({ type: 'varchar', name: 'complemento' })
  complemento: string;

  @Column({ type: 'int', name: 'telefone' })
  telefone: number;

  @Column({ type: 'varchar', name: 'email' })
  email: string;

  @Column({ type: 'varchar', name: 'endereco_exterior' })
  enderecoExterior: string;

  @Column({ type: 'int', name: 'atividade_id' })
  atividadeId: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
