import { IsNotEmpty } from 'class-validator';

export class UpdateTipoBairroDto {
  @IsNotEmpty()
  descricao: string;
}
