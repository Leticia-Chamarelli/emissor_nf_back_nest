import { IsNotEmpty } from 'class-validator';

export class CreateExigibilidadeIssDto {
  @IsNotEmpty()
  descricao: string;
}
