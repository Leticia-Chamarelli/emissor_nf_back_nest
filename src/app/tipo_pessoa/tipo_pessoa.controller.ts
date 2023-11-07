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
import { CreateTipoPessoaDto } from './dto/create-tipo_pessoa.dto';
import { UpdateTipoPessoaDto } from './dto/update-tipo_pessoa.dto';
import { TipoPessoaService } from './tipo_pessoa.service';

@Controller('api/v1/tipopessoa')
@UseGuards(AuthGuard('jwt'))
export class TipoPessoaController {
  constructor(private readonly tipopessoaService: TipoPessoaService) {}

  @Get()
  async index() {
    return await this.tipopessoaService.findAll();
  }

  @Post()
  async store(@Body() body: CreateTipoPessoaDto) {
    return await this.tipopessoaService.store(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.tipopessoaService.findOneOrFail({ id });
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateTipoPessoaDto,
  ) {
    return await this.tipopessoaService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.tipopessoaService.destroy(id);
  }
}
