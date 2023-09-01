import { Test, TestingModule } from '@nestjs/testing';
import { ExigibilidadeIssController } from './exigibilidade_iss.controller';

describe('ExigibilidadeIssController', () => {
  let controller: ExigibilidadeIssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExigibilidadeIssController],
    }).compile();

    controller = module.get<ExigibilidadeIssController>(
      ExigibilidadeIssController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
