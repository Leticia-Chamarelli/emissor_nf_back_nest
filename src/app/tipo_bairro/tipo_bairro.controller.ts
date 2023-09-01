import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateTipoBairroDto } from './dto/create-tipo_bairro.dto';
import { UpdateTipoBairroDto } from './dto/update-tipo_bairro.dto';
import { TipoBairroService } from './tipo_bairro.service';

@Controller('api/v1/tipobairro')
@UseGuards(AuthGuard('jwt'))
export class TipoBairroController {
  constructor(private readonly tipobairroService: TipoBairroService) {}

  @Get()
  async index() {
    return await this.tipobairroService.findAll();
  }

  @Post()
  async store(@Body() body: CreateTipoBairroDto) {
    return await this.tipobairroService.store(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.tipobairroService.findOneOrFail({ id });
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateTipoBairroDto,
  ) {
    return await this.tipobairroService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.tipobairroService.destroy(id);
  }
}
