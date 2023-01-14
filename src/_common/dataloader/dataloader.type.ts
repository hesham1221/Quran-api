import * as DataLoader from 'dataloader';
import { User } from '../../user/models/user.model';

export type UserLoaderType = DataLoader<string, User>;

export type UserDataLoaderType = {
  userLoader: UserLoaderType;
};

