import { Test, TestingModule } from '@nestjs/testing';
import { TipoBairroService } from './tipo_bairro.service';

describe('TipoBairroService', () => {
  let service: TipoBairroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoBairroService],
    }).compile();

    service = module.get<TipoBairroService>(TipoBairroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
