import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './http-exception.filter';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);

  //register all filters globally
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  // Enable CORS
  app.enableCors();

  // versioning
  app.setGlobalPrefix('api/v1');
  //setting header
  app.use(helmet());
  // Swagger Setup
  const config = new DocumentBuilder()
    .setTitle('House Rental Management API')
    .setDescription('API documentation for House Rental Management System')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
