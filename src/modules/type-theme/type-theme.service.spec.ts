import { Test, TestingModule } from '@nestjs/testing';
import { TypeThemeService } from './type-theme.service';

describe('TypeThemeService', () => {
  let service: TypeThemeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeThemeService],
    }).compile();

    service = module.get<TypeThemeService>(TypeThemeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
