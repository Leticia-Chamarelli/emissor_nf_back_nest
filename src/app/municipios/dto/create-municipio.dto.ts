import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateMunicipioDto {
  @IsUUID()
  estados_id: string;

  @IsNotEmpty()
  nome: string;
}
