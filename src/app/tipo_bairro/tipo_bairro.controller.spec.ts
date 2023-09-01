import { Test, TestingModule } from '@nestjs/testing';
import { TipoBairroController } from './tipo_bairro.controller';

describe('TipoBairroController', () => {
  let controller: TipoBairroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoBairroController],
    }).compile();

    controller = module.get<TipoBairroController>(TipoBairroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
