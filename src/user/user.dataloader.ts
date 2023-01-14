import * as DataLoader from 'dataloader';
import { Inject, Injectable } from '@nestjs/common';
import { IRepository } from 'src/_common/database/repository.interface';
import { Repositories } from 'src/_common/database/database-repository.enum';
import { User } from './models/user.model';
import { IDataLoaderService } from '../_common/dataloader/dataloader.interface';
import {
  UserLoaderType,
  UserDataLoaderType
} from '../_common/dataloader/dataloader.type';
import { HelperService } from 'src/_common/utils/helper.service';

@Injectable()
export class UserDataloader implements IDataLoaderService {
  constructor(
    @Inject(Repositories.UsersRepository) private readonly userRepo: IRepository<User>,
    private readonly helper: HelperService
  ) {}

  public createLoaders(): UserDataLoaderType {
    const userLoader: UserLoaderType = new DataLoader(
      async (senderIds: string[]) => await this.findUserByIds(senderIds)
    );

    return {
      userLoader,
    };
  }

  private async findUserByIds(usersIds) {
    const users = await this.userRepo.findAll({ id: usersIds });
    const userMap = await this.helper.deriveMapFromArray(users, (user: User) => user.id);
    return usersIds.map(id => userMap.get(id));
  }
}
