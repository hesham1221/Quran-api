import { Module } from '@nestjs/common';
import { AyahService } from './ayah.service';
import { AyahResolver } from './ayah.resolver';

@Module({
  providers: [AyahResolver, AyahService]
})
export class AyahModule {}
