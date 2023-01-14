import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../user/models/user.model';
import { UserDataloader } from '../../user/user.dataloader';
import { IDataLoaders, IDataLoaderService } from './dataloader.interface';

@Injectable()
export class DataloaderService implements IDataLoaderService {
  constructor(
    @Inject(UserDataloader) private readonly userLoader: IDataLoaderService,
  ) {}

  createLoaders(currentUser: User): IDataLoaders {
    return {
      ...this.userLoader.createLoaders()
    };
  }
}
