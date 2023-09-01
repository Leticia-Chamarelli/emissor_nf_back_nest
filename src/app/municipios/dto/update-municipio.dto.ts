import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateMunicipioDto {
  @IsUUID()
  estados_id: string;

  @IsNotEmpty()
  nome: string;
}
