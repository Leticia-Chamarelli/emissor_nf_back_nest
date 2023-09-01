import { IsNotEmpty } from 'class-validator';

export class CreateTipoLogradouroDto {
  @IsNotEmpty()
  descricao: string;
}
