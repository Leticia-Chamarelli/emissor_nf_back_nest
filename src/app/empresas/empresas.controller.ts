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
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { EmpresasService } from './empresas.service';

@Controller('api/v1/empresas')
@UseGuards(AuthGuard('jwt'))
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  @Get()
  async index() {
    return await this.empresasService.findAll();
  }

  @Post()
  async store(@Body() body: CreateEmpresaDto) {
    return await this.empresasService.store(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.empresasService.findOneOrFail({ id });
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateEmpresaDto,
  ) {
    return await this.empresasService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.empresasService.destroy(id);
  }
}
