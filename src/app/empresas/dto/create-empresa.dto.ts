import { IsNotEmpty } from 'class-validator';

export class CreateEmpresaDto {
  @IsNotEmpty()
  apelidoEmpresa: string;

  @IsNotEmpty()
  tipoPessoaId: string;

  @IsNotEmpty()
  cpfCnpj: string;

  @IsNotEmpty()
  ccm: string;

  @IsNotEmpty()
  razaoSocial: string;

  @IsNotEmpty()
  municipiosId: string;

  @IsNotEmpty()
  tipoBairroId: string;

  @IsNotEmpty()
  bairro: string;

  @IsNotEmpty()
  tipoLogradouroId: string;

  @IsNotEmpty()
  logradouro: string;

  @IsNotEmpty()
  numero: number;

  @IsNotEmpty()
  cep: number;

  @IsNotEmpty()
  complemento: string;

  @IsNotEmpty()
  telefone: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  enderecoExterior: string;

  @IsNotEmpty()
  atividadeId: string;
}
