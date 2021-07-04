import { Test, TestingModule } from '@nestjs/testing';
import { FrontsideController } from './frontside.controller';

describe('FrontsideController', () => {
  let controller: FrontsideController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrontsideController],
    }).compile();

    controller = module.get<FrontsideController>(FrontsideController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
