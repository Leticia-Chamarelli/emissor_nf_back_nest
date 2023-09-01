import { IsNotEmpty } from 'class-validator';

export class CreatePaisDto {
  @IsNotEmpty()
  nome: string;
}
