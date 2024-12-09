import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VideoSnapService } from './video-snap.service';
import { VideoSnap } from './video-snap.entity';

@Resolver('VideoSnap')
export class VideoSnapResolver {
  constructor(private readonly videoSnapService: VideoSnapService) {}

  @Mutation("createVideoSnap")
  async create(@Args('input') input: VideoSnap) {
    return await this.videoSnapService.create(input);
  }

  @Query('videoSnaps')
  findAll(@Args('feed') feed: number) {
    return feed !== undefined ? this.videoSnapService.findAllForFeed(feed) : this.videoSnapService.findAll();
  }

  @Query('videoSnap')
  findOne(@Args('id') id: number) {
    return this.videoSnapService.findOne(id);
  }

  @Mutation('removeVideoSnap')
  remove(@Args('id') id: number) {
    return this.videoSnapService.remove(id);
  }
}
