import { Test, TestingModule } from '@nestjs/testing';
import { SkinprofilesService } from './skinprofiles.service';

describe('SkinprofilesService', () => {
  let service: SkinprofilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SkinprofilesService],
    }).compile();

    service = module.get<SkinprofilesService>(SkinprofilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
