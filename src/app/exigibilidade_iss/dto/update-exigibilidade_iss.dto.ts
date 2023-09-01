import { IsNotEmpty } from 'class-validator';

export class UpdateExigibilidadeIssDto {
  @IsNotEmpty()
  descricao: string;
}
