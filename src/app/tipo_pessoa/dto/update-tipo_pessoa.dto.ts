import { IsNotEmpty } from 'class-validator';

export class UpdateTipoPessoaDto {
  @IsNotEmpty()
  descricao: string;
}
