import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VideoSnapService } from './video-snap.service';
import { CreateVideoSnapInput } from './dto/create-video-snap.input';
import { UpdateVideoSnapInput } from './dto/update-video-snap.input';

@Resolver('VideoSnap')
export class VideoSnapResolver {
  constructor(private readonly videoSnapService: VideoSnapService) {}

  @Mutation('createVideoSnap')
  create(@Args('createVideoSnapInput') createVideoSnapInput: CreateVideoSnapInput) {
    return this.videoSnapService.create(createVideoSnapInput);
  }

  @Query('videoSnaps')
  findAll() {
    return this.videoSnapService.findAll();
  }

  @Query('videoSnap')
  findOne(@Args('id') id: number) {
    return this.videoSnapService.findOne(id);
  }

  @Mutation('updateVideoSnap')
  update(@Args('updateVideoSnapInput') updateVideoSnapInput: UpdateVideoSnapInput) {
    return this.videoSnapService.update(updateVideoSnapInput.id, updateVideoSnapInput);
  }

  @Mutation('removeVideoSnap')
  remove(@Args('id') id: number) {
    return this.videoSnapService.remove(id);
  }
}
