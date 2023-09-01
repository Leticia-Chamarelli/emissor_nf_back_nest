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
import { CreateTipoLogradouroDto } from './dto/create-tipo_logradouro.dto';
import { UpdateTipoLogradouroDto } from './dto/update-tipo_logradouro.dto';
import { TipoLogradouroService } from './tipo_logradouro.service';

@Controller('api/v1/tipologradouro')
@UseGuards(AuthGuard('jwt'))
export class TipoLogradouroController {
  constructor(private readonly tipologradouroService: TipoLogradouroService) {}

  @Get()
  async index() {
    return await this.tipologradouroService.findAll();
  }

  @Post()
  async store(@Body() body: CreateTipoLogradouroDto) {
    return await this.tipologradouroService.store(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.tipologradouroService.findOneOrFail({ id });
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateTipoLogradouroDto,
  ) {
    return await this.tipologradouroService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.tipologradouroService.destroy(id);
  }
}
