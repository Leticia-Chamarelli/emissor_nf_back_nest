import { Test, TestingModule } from '@nestjs/testing';
import { TipoPessoaController } from './tipo_pessoa.controller';

describe('TipopessoaController', () => {
  let controller: TipoPessoaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoPessoaController],
    }).compile();

    controller = module.get<TipoPessoaController>(TipoPessoaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
