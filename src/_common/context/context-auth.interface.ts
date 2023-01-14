import { User } from '../../user/models/user.model';
import { LangEnum } from '../../user/user.enum';
import { Request } from 'express';
import { Timezone } from '../graphql/graphql-response.type';

export const IContextAuthServiceToken = 'IContextAuthService';

export interface IContextAuthService {
  getTimezone(timezoneAsString: string): Timezone;

  getUserFromReqHeaders(req: Request): Promise<User>;

  getLocale(req: Request): { lang: LangEnum; country: string };

}
