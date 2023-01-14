import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';
import { Ayah } from 'src/ayah/models/ayah.model';
import { Repositories } from 'src/_common/database/database-repository.enum';
import { IRepository } from 'src/_common/database/repository.interface';
import { PaginatorInput } from 'src/_common/paginator/paginator.input';
import { PaginationRes } from 'src/_common/paginator/paginator.types';
import { SurahFilter } from './inputs/surah-filter.input';
import { Surah } from './models/surah.model';

@Injectable()
export class SurahService {
  constructor(
    @Inject(Repositories.SurahsRepository)
    private readonly surahModel: IRepository<Surah>,
  ) {}

  allSurahs(
    filter: SurahFilter = {},
    paginate: PaginatorInput = {},
  ): Promise<PaginationRes<Surah>> {
    return this.surahModel.findPaginated(
      {
        ...(filter.revelationType && {
          revelationType : filter.revelationType
        }),
        ...(filter.searchKey && {
          [Op.or]: {
            name: { [Op.iLike]: `%${filter.searchKey}%` },
            enName: { [Op.iLike]: `%${filter.searchKey}%` },
            enTranslation: { [Op.iLike]: `%${filter.searchKey}%` },
          },
        }),
      },
      'number',
      paginate.page,
      paginate.limit,
    );
  }

  surahById(id: string) {
    return this.surahModel.findOne({ id }, [Ayah]);
  }
}
