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
import { CreateExigibilidadeIssDto } from './dto/create-exigibilidade_iss.dto';
import { UpdateExigibilidadeIssDto } from './dto/update-exigibilidade_iss.dto';
import { ExigibilidadeIssService } from './exigibilidade_iss.service';

@Controller('api/v1/exigibilidadeiss')
@UseGuards(AuthGuard('jwt'))
export class ExigibilidadeIssController {
  constructor(
    private readonly exigibilidadeissService: ExigibilidadeIssService,
  ) {}

  @Get()
  async index() {
    return await this.exigibilidadeissService.findAll();
  }

  @Post()
  async store(@Body() body: CreateExigibilidadeIssDto) {
    return await this.exigibilidadeissService.store(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.exigibilidadeissService.findOneOrFail({ id });
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateExigibilidadeIssDto,
  ) {
    return await this.exigibilidadeissService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.exigibilidadeissService.destroy(id);
  }
}
