import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const logger = new Logger('Bootstrap');
  
  // 简化版CORS配置
  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // 健康检查端点
  app.getHttpAdapter().get('/health', (req, res) => {
    res.status(200).json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'MHWildsWiki API'
    });
  });

  const port = 4000;
  await app.listen(port);
  
  logger.log(`🚀 MHWildsWiki API running on: http://localhost:${port}`);
  logger.log(`📊 GraphQL Playground: http://localhost:${port}/graphql`);
  logger.log(`💚 Health check: http://localhost:${port}/health`);
}

bootstrap().catch(err => {
  console.error('Error starting server:', err);
  process.exit(1);
});
