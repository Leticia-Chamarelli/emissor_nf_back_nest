import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateMunicipioDto {
  @IsUUID()
  estadosId: string;

  @IsNotEmpty()
  nome: string;
}
