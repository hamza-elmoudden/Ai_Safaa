import { Test, TestingModule } from '@nestjs/testing';
import { ChattreatmentController } from './chattreatment.controller';

describe('ChattreatmentController', () => {
  let controller: ChattreatmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChattreatmentController],
    }).compile();

    controller = module.get<ChattreatmentController>(ChattreatmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
