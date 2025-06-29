import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  try {
    const { AppModule } = await import('./app.module.minimal');
    const app = await NestFactory.create(AppModule);
    
    app.enableCors({
      origin: ['http://localhost:3000'],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    });

    const port = 4000;
    await app.listen(port);
    
    console.log(`🚀 Minimal GraphQL API running on: http://localhost:${port}`);
    console.log(`📊 GraphQL Playground: http://localhost:${port}/graphql`);
  } catch (error) {
    console.error('❌ Failed to start minimal server:', error);
    process.exit(1);
  }
}

bootstrap();
