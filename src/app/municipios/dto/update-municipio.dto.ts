import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateMunicipioDto {
  @IsUUID()
  estadosId: string;

  @IsNotEmpty()
  nome: string;
}
