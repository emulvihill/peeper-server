import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from 'path';
import { VideoSnapModule } from './video-snap/video-snap.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoSnapService } from './video-snap/video-snap.service';
import { VideoSnap } from './video-snap/video-snap.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'peeper',
      entities: [VideoSnap],
      synchronize: true,
    }),
    VideoSnapModule,
  ],
  controllers: [AppController],
  providers: [AppService, VideoSnapService],
})
export class AppModule {
}
