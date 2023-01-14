import { Injectable, Inject } from '@nestjs/common';
import { Surah } from 'src/surah/models/surah.model';
import { Repositories } from 'src/_common/database/database-repository.enum';
import { IRepository } from 'src/_common/database/repository.interface';
import { Ayah } from './models/ayah.model';

@Injectable()
export class AyahService {
  constructor(
    @Inject(Repositories.AyahsRepository)
    private readonly ayahRepo: IRepository<Ayah>,
  ) {}

  findAll() {
    return this.ayahRepo.findAll({} , [Surah]);
  }

  findOne(id: string) {
    return this.ayahRepo.findOne({id} ,[Surah] );
  }
}
