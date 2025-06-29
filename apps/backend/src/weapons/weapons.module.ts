import { Module } from '@nestjs/common';
import { WeaponsService } from './weapons.service';
import { WeaponsResolver } from './weapons.resolver';
import { WeaponsEnhancedService } from './weapons-enhanced.service';
import { WeaponsEnhancedResolver } from './weapons-enhanced.resolver';
import { DatabaseService } from '../common/database.service';

@Module({
  providers: [
    WeaponsService, 
    WeaponsResolver,
    WeaponsEnhancedService,
    WeaponsEnhancedResolver,
    DatabaseService
  ],
  exports: [WeaponsService, WeaponsEnhancedService],
})
export class WeaponsModule {}
