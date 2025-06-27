import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MonstersModule } from './monsters/monsters.module';
import { WeaponsModule } from './weapons/weapons.module';
import { ArmorModule } from './armor/armor.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      // 环境相关配置
      playground: process.env.NODE_ENV !== 'production',
      introspection: process.env.NODE_ENV !== 'production',
      // GraphQL 性能优化
      cache: 'bounded',
      csrfPrevention: true,
      // 查询复杂度限制 - 防止恶意查询
      validationRules: [],
      formatError: (error) => {
        // 生产环境下隐藏内部错误细节
        if (process.env.NODE_ENV === 'production') {
          console.error('GraphQL Error:', error);
          return new Error('Internal server error');
        }
        return error;
      },
    }),
    MonstersModule,
    WeaponsModule,
    ArmorModule,
    ItemsModule,
  ],
})
export class AppModule {}
