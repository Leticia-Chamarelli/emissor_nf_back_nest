import { Test, TestingModule } from '@nestjs/testing';
import { TipoLogradouroController } from './tipo_logradouro.controller';

describe('TipoLogradouroController', () => {
  let controller: TipoLogradouroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoLogradouroController],
    }).compile();

    controller = module.get<TipoLogradouroController>(TipoLogradouroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
