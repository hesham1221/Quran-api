import { ayahsFactory } from 'src/ayah/ayah.factory';
import { AyahType } from 'src/ayah/types/ayah.type';
import { buildRepository } from 'src/_common/database/database-repository.builder';
import { IRepository } from 'src/_common/database/repository.interface';
import { Surah } from './models/surah.model';
import { SurahType } from './types/surah.type';

const surrahRepo = new (buildRepository(Surah))() as IRepository<Surah>;

export const surahsFactory = async (surahs: SurahType[]) => {
  const ayahs: AyahType[][] = [];
  surahs.forEach((surah) => {
    ayahs.push(surah.ayahs);
  });
  const newSurahs = surahs.map(({ ayahs, ...surah }) => ({ ...surah }));
  const oldData = surrahRepo.findOne({number : 1})
  if(oldData) return
  const createdSurrahs = await surrahRepo.bulkCreate(newSurahs);
  const ayahsWithSurahId: AyahType[] = [];
  createdSurrahs.forEach((surrah, i) => {
    ayahs[i].forEach(({ sajda, ...ayah }) => {
      ayahsWithSurahId.push({
        ...ayah,
        sajda: sajda === false ? { id: 0 } : sajda,
        surahId: surrah.id,
      });
    });
  });
  return await ayahsFactory(ayahsWithSurahId);
};
