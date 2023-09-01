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
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { PaisService } from './pais.service';

@Controller('api/v1/pais')
@UseGuards(AuthGuard('jwt'))
export class PaisController {
  constructor(private readonly paisService: PaisService) {}

  @Get()
  async index() {
    return await this.paisService.findAll();
  }

  @Post()
  async store(@Body() body: CreatePaisDto) {
    return await this.paisService.store(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.paisService.findOneOrFail({ id });
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdatePaisDto,
  ) {
    return await this.paisService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.paisService.destroy(id);
  }
}
