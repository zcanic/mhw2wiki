import { Module } from '@nestjs/common';
import { MonstersService } from './monsters.service';
import { MonstersResolver } from './monsters.resolver';
import { MonstersEnhancedService } from './monsters-enhanced.service';
import { MonstersEnhancedResolver } from './monsters-enhanced.resolver';
import { DatabaseService } from '../common/database.service';

@Module({
  providers: [
    MonstersService, 
    MonstersResolver,
    MonstersEnhancedService,
    MonstersEnhancedResolver,
    DatabaseService
  ],
  exports: [MonstersService, MonstersEnhancedService],
})
export class MonstersModule {}
