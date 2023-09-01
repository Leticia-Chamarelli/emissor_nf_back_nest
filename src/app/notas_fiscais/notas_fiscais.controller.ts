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
import { CreateNotasFiscaisDto } from './dto/create-notas_fiscais.dto';
import { UpdateNotasFiscaisDto } from './dto/update-notas_fiscais.dto';
import { NotasFiscaisService } from './notas_fiscais.service';

@Controller('api/v1/notasfiscais')
@UseGuards(AuthGuard('jwt'))
export class NotasFiscaisController {
  constructor(private readonly notasfiscaisService: NotasFiscaisService) {}

  @Get()
  async index() {
    return await this.notasfiscaisService.findAll();
  }

  @Post()
  async store(@Body() body: CreateNotasFiscaisDto) {
    return await this.notasfiscaisService.store(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.notasfiscaisService.findOneOrFail({ id });
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateNotasFiscaisDto,
  ) {
    return await this.notasfiscaisService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.notasfiscaisService.destroy(id);
  }
}
