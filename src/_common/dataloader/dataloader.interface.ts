import { User } from '../../user/models/user.model';
import {
  UserLoaderType
} from './dataloader.type';

export interface IDataLoaderService {
  createLoaders(current?: User);
}

export interface IDataLoaders {
  userLoader: UserLoaderType;
}
