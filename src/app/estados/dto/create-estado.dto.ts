import { IsNotEmpty } from 'class-validator';

export class CreateEstadoDto {
  @IsNotEmpty()
  nome: string;
}
