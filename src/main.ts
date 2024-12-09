import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GraphQLSchemaHost } from "@nestjs/graphql";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const { schema } = app.get(GraphQLSchemaHost);
}
bootstrap();
