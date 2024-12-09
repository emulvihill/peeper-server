import { Module } from '@nestjs/common';
import { VideoSnapService } from './video-snap.service';
import { VideoSnap } from './video-snap.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoSnapResolver } from './video-snap.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([VideoSnap])],
  exports: [TypeOrmModule],
  providers: [VideoSnapService, VideoSnapResolver],
})
export class VideoSnapModule { }
