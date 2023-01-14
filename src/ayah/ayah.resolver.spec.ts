import { Test, TestingModule } from '@nestjs/testing';
import { AyahResolver } from './ayah.resolver';
import { AyahService } from './ayah.service';

describe('AyahResolver', () => {
  let resolver: AyahResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AyahResolver, AyahService],
    }).compile();

    resolver = module.get<AyahResolver>(AyahResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
