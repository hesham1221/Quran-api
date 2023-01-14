import { Resolver, Query, Args } from '@nestjs/graphql';
import { SurahService } from './surah.service';
import { Surah } from './models/surah.model';
import { GqlSurahResponse, GqlSurahsResponse } from './surah.response';


@Resolver(() => Surah)
export class SurahResolver {
  constructor(private readonly surahService: SurahService) {}

  @Query(() => GqlSurahsResponse, { name: 'surahs' })
  findAll() {
    return this.surahService.findAll();
  }

  @Query(() => GqlSurahResponse , { name: 'surah' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.surahService.findOne(id);
  }
}
