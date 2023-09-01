import { IsNotEmpty } from 'class-validator';

export class CreateAtividadeDto {
  @IsNotEmpty()
  descricao: string;

  @IsNotEmpty()
  codigo: number;
}
