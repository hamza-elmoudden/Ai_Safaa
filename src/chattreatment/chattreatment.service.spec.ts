import { Test, TestingModule } from '@nestjs/testing';
import { ChattreatmentService } from './chattreatment.service';

describe('ChattreatmentService', () => {
  let service: ChattreatmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChattreatmentService],
    }).compile();

    service = module.get<ChattreatmentService>(ChattreatmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
