import { User } from 'src/user/models/user.model';
import { LangEnum } from 'src/user/user.enum';
import { IDataLoaders } from '../dataloader/dataloader.interface';
import { Timezone } from './graphql-response.type';

export interface GqlContext {
  currentUser?: User;
  req: Request;
  lang: LangEnum;
  country: string;
  timezone: Timezone;
  loaders: IDataLoaders;
}
