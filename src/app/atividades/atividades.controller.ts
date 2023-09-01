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
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import { AtividadesService } from './atividades.service';

@Controller('api/v1/atividades')
@UseGuards(AuthGuard('jwt'))
export class AtividadesController {
  constructor(private readonly atividadesService: AtividadesService) {}

  @Get()
  async index() {
    return await this.atividadesService.findAll();
  }

  @Post()
  async store(@Body() body: CreateAtividadeDto) {
    return await this.atividadesService.store(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.atividadesService.findOneOrFail({ id });
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateAtividadeDto,
  ) {
    return await this.atividadesService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.atividadesService.destroy(id);
  }
}
