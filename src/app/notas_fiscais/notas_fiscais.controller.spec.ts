import { Test, TestingModule } from '@nestjs/testing';
import { NotasFiscaisController } from './notas_fiscais.controller';

describe('NotasFiscaisController', () => {
  let controller: NotasFiscaisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotasFiscaisController],
    }).compile();

    controller = module.get<NotasFiscaisController>(NotasFiscaisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
