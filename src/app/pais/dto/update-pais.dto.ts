import { IsNotEmpty } from 'class-validator';

export class UpdatePaisDto {
  @IsNotEmpty()
  nome: string;
}
