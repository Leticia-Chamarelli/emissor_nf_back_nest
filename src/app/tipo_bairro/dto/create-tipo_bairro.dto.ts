import { IsNotEmpty } from 'class-validator';

export class CreateTipoBairroDto {
  @IsNotEmpty()
  descricao: string;
}
