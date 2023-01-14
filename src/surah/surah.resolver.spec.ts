import { Test, TestingModule } from '@nestjs/testing';
import { SurahResolver } from './surah.resolver';
import { SurahService } from './surah.service';

describe('SurahResolver', () => {
  let resolver: SurahResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurahResolver, SurahService],
    }).compile();

    resolver = module.get<SurahResolver>(SurahResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
