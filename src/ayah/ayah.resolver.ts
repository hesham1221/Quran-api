import { Resolver, Query, Args } from '@nestjs/graphql';
import { GqlAyahResponse, GqlAyahsResponse } from './ayah.responese';
import { AyahService } from './ayah.service';
import { Ayah } from './models/ayah.model';

@Resolver(() => Ayah)
export class AyahResolver {
  constructor(private readonly ayahService: AyahService) {}

  @Query(() => GqlAyahsResponse, { name: 'ayahs' })
  findAll() {
    return this.ayahService.findAll();
  }

  @Query(() => GqlAyahResponse, { name: 'ayah' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.ayahService.findOne(id);
  }
}
