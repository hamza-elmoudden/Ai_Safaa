import { Test, TestingModule } from '@nestjs/testing';
import { TokenusageController } from './tokenusage.controller';

describe('TokenusageController', () => {
  let controller: TokenusageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TokenusageController],
    }).compile();

    controller = module.get<TokenusageController>(TokenusageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
