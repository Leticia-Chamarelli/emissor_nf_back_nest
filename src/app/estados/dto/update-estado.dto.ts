import { IsNotEmpty } from 'class-validator';

export class UpdateEstadoDto {
  @IsNotEmpty()
  nome: string;
}
