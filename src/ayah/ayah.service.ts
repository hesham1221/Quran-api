import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';
import { Surah } from 'src/surah/models/surah.model';
import { Repositories } from 'src/_common/database/database-repository.enum';
import { IRepository } from 'src/_common/database/repository.interface';
import { BaseHttpException } from 'src/_common/exceptions/base-http-exception';
import { ErrorCodeEnum } from 'src/_common/exceptions/error-code.enum';
import { PaginatorInput } from 'src/_common/paginator/paginator.input';
import { PaginationRes } from 'src/_common/paginator/paginator.types';
import { AyahFilter } from './inputs/ayah-filter.input';
import { AyahInput } from './inputs/ayah.input';
import { Ayah } from './models/ayah.model';

@Injectable()
export class AyahService {
  constructor(
    @Inject(Repositories.AyahsRepository)
    private readonly ayahRepo: IRepository<Ayah>,
  ) {}

  allAyahs(
    filter: AyahFilter = {},
    paginate: PaginatorInput = {},
    surahInfo : AyahInput
  ): Promise<PaginationRes<Ayah>> {
    const {searchKey ,...otherFilters } = filter; 
    if(!surahInfo.surahId && !surahInfo.surahNumber ) throw new BaseHttpException(ErrorCodeEnum.INVALID_SURAH_INFO)
    return this.ayahRepo.findPaginated(
      {
        //todo : add filter by surah number
        ...(surahInfo.surahId ? {surahId :surahInfo.surahId } : { number :surahInfo.surahNumber } ),
        ...otherFilters,
        ...(searchKey && {
          [Op.or]: {
            enTranslation: { [Op.iLike]: `%${searchKey}%` },
            text: { [Op.iLike]: `%${searchKey}%` },
          },
        }),
      },
      'number',
      paginate.page,
      paginate.limit,
    );

  }

  oneAyah(id: string) {
    return this.ayahRepo.findOne({id} ,[Surah] );
  }
}
