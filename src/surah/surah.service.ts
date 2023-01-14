import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { Ayah } from 'src/ayah/models/ayah.model';
import { Repositories } from 'src/_common/database/database-repository.enum';
import { IRepository } from 'src/_common/database/repository.interface';
import { Surah } from './models/surah.model';

@Injectable()
export class SurahService {
  constructor(
    @Inject(Repositories.SurahsRepository)
    private readonly surahModel: IRepository<Surah>,
  ) {}

  findAll() {
    return this.surahModel.findAll(
      {},
      [Ayah],
      ['number', [Sequelize.literal(`"ayahs"."number"`)]],
    );
  }

  findOne(id: string) {
    return this.surahModel.findOne({ id }, [Ayah]);
  }
}
