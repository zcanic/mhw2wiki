import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsResolver } from './items.resolver';
import { ItemsEnhancedService } from './items-enhanced.service';
import { ItemsEnhancedResolver } from './items-enhanced.resolver';
import { DatabaseService } from '../common/database.service';

@Module({
  providers: [
    ItemsService, 
    ItemsResolver, 
    ItemsEnhancedService, 
    ItemsEnhancedResolver,
    DatabaseService
  ],
  exports: [ItemsService, ItemsEnhancedService],
})
export class ItemsModule {}
