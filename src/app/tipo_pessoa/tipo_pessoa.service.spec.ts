import { Test, TestingModule } from '@nestjs/testing';
import { TipoPessoaService } from './tipo_pessoa.service';

describe('TipoPessoaService', () => {
  let service: TipoPessoaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoPessoaService],
    }).compile();

    service = module.get<TipoPessoaService>(TipoPessoaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
