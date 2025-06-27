import { Module } from '@nestjs/common';
import { ArmorService } from './armor.service';
import { ArmorResolver } from './armor.resolver';

@Module({
  providers: [ArmorService, ArmorResolver],
  exports: [ArmorService],
})
export class ArmorModule {}
