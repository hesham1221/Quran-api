import { Module } from '@nestjs/common';
import { SurahService } from './surah.service';
import { SurahResolver } from './surah.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Surah } from './models/surah.model';

@Module({
  providers: [SurahResolver, SurahService]
})
export class SurahModule {}
