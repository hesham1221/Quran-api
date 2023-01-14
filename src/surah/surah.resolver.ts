import { Resolver, Query, Args, ResolveField } from '@nestjs/graphql';
import { SurahService } from './surah.service';
import { Surah } from './models/surah.model';
import { GqlSurahResponse, GqlSurahsResponse } from './surah.response';
import { SurahFilterInput } from './inputs/surah-filter.input';
import { NullablePaginatorInput } from 'src/_common/paginator/paginator.input';


@Resolver(() => Surah)
export class SurahResolver {
  constructor(private readonly surahService: SurahService) {}


  // Queries

  @Query(() => GqlSurahsResponse, { name: 'surahs' })
  allSurahs(@Args() filter: SurahFilterInput, @Args() paginate: NullablePaginatorInput) {
    return this.surahService.allSurahs(filter.filter , paginate.paginate);
  }

  @Query(() => GqlSurahResponse , { name: 'surah' })
  surah(@Args('id', { type: () => String }) id: string) {
    return this.surahService.surahById(id);
  }


  // Resolvefileds

  @ResolveField(() => String)
  surahAudio(surah : Surah){
    //todo : make it dynamic depending on user prefered reader
    return `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${surah.number}.mp3`
  }
}
