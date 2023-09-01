import { IsNotEmpty } from 'class-validator';

export class UpdateTipoLogradouroDto {
  @IsNotEmpty()
  descricao: string;
}
