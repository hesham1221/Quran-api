import { Resolver, Query, Args, ResolveField } from '@nestjs/graphql';
import { NullablePaginatorInput } from 'src/_common/paginator/paginator.input';
import { GqlAyahResponse, GqlAyahsResponse } from './ayah.responese';
import { AyahService } from './ayah.service';
import { AyahFilterInput } from './inputs/ayah-filter.input';
import { AyahInput } from './inputs/ayah.input';
import { Ayah } from './models/ayah.model';

@Resolver(() => Ayah)
export class AyahResolver {
  constructor(private readonly ayahService: AyahService) {}

  @Query(() => GqlAyahsResponse, { name: 'ayahs' })
  allAyahs(@Args('surahInfo') surahInfo : AyahInput ,@Args() filter: AyahFilterInput, @Args() paginate: NullablePaginatorInput) {
    return this.ayahService.allAyahs(filter.filter , paginate.paginate , surahInfo);
  }

  @Query(() => GqlAyahResponse, { name: 'ayah' })
  oneAyah(@Args('id', { type: () => String }) id: string) {
    return this.ayahService.oneAyah(id);
  }

  @ResolveField(() => String)
  ayahAudio(ayah : Ayah){
    // todo : add ayahAudio by user prefered reader
    return `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayah.number}.mp3`
  }
}
