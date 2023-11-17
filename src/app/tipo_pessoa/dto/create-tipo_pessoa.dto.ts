import { IsNotEmpty } from 'class-validator';

export class CreateTipoPessoaDto {
  @IsNotEmpty()
  descricao: string;
}
