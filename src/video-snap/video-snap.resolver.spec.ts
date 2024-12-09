import { Test, TestingModule } from '@nestjs/testing';
import { VideoSnapResolver } from './video-snap.resolver';
import { VideoSnapService } from './video-snap.service';

describe('VideoSnapResolver', () => {
  let resolver: VideoSnapResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoSnapResolver, VideoSnapService],
    }).compile();

    resolver = module.get<VideoSnapResolver>(VideoSnapResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
