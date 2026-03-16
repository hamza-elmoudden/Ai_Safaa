import { Test, TestingModule } from '@nestjs/testing';
import { TokenusageService } from './tokenusage.service';

describe('TokenusageService', () => {
  let service: TokenusageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TokenusageService],
    }).compile();

    service = module.get<TokenusageService>(TokenusageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
