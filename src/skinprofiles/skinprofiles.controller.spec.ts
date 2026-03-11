import { Test, TestingModule } from '@nestjs/testing';
import { SkinprofilesController } from './skinprofiles.controller';

describe('SkinprofilesController', () => {
  let controller: SkinprofilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkinprofilesController],
    }).compile();

    controller = module.get<SkinprofilesController>(SkinprofilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
