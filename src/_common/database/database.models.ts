import { plural } from 'pluralize';
import { Ayah } from 'src/ayah/models/ayah.model';
import { Surah } from 'src/surah/models/surah.model';
import { User } from 'src/user/models/user.model';
import { buildRepository } from './database-repository.builder';

export const models = [
  User,
  Surah,
  Ayah
];

export const repositories = models.map(m => ({
  provide: `${plural(m.name)}Repository`,
  useClass: buildRepository(m)
}));
