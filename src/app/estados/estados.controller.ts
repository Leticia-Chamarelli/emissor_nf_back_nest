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
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { EstadosService } from './estados.service';

@Controller('api/v1/estados')
@UseGuards(AuthGuard('jwt'))
export class EstadosController {
  constructor(private readonly estadosService: EstadosService) {}

  @Get()
  async index() {
    return await this.estadosService.findAll();
  }

  @Post()
  async store(@Body() body: CreateEstadoDto) {
    return await this.estadosService.store(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.estadosService.findOneOrFail({ id });
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateEstadoDto,
  ) {
    return await this.estadosService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.estadosService.destroy(id);
  }
}
