import { IsNotEmpty } from 'class-validator';

export class UpdateAtividadeDto {
  @IsNotEmpty()
  descricao: string;

  @IsNotEmpty()
  codigo: number;
}
