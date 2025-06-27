import { Module } from '@nestjs/common';
import { WeaponsService } from './weapons.service';
import { WeaponsResolver } from './weapons.resolver';

@Module({
  providers: [WeaponsService, WeaponsResolver],
  exports: [WeaponsService],
})
export class WeaponsModule {}
