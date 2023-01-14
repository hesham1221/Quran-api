import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { UserDataloader } from './user.dataloader';
import { HelperModule } from 'src/_common/utils/helper.module';

@Module({
  imports : [HelperModule],
  providers: [UserResolver, UserService, UserDataloader],
  exports : [UserDataloader]
})
export class UserModule {}
