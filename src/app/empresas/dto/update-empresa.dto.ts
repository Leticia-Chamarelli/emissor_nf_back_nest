import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateEmpresaDto {
  @IsNotEmpty()
  apelidoEmpresa: string;

  @IsUUID()
  tipoPessoaId: string;

  @IsNotEmpty()
  cpfCnpj: string;

  @IsNotEmpty()
  ccm: string;

  @IsNotEmpty()
  razaoSocial: string;

  @IsUUID()
  municipiosId: string;

  @IsUUID()
  tipoBairroId: string;

  @IsNotEmpty()
  bairro: string;

  @IsNotEmpty()
  tipoLogradouro: number;

  @IsNotEmpty()
  logradouro: string;

  @IsNotEmpty()
  numero: number;

  @IsNotEmpty()
  cep: number;

  @IsNotEmpty()
  complemento: string;

  @IsNotEmpty()
  telefone: number;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  enderecoExterior: string;

  @IsUUID()
  atividadeId: string;
}
