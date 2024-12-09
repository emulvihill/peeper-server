import { Module } from '@nestjs/common';
import { VideoSnapService } from './video-snap.service';
import { VideoSnapResolver } from './video-snap.resolver';

@Module({
  providers: [VideoSnapResolver, VideoSnapService]
})
export class VideoSnapModule {}
