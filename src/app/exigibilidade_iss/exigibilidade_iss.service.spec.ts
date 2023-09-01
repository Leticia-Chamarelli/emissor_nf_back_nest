import { Test, TestingModule } from '@nestjs/testing';
import { ExigibilidadeIssService } from './exigibilidade_iss.service';

describe('ExigibilidadeIssService', () => {
  let service: ExigibilidadeIssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExigibilidadeIssService],
    }).compile();

    service = module.get<ExigibilidadeIssService>(ExigibilidadeIssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
