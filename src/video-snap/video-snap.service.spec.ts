import { Test, TestingModule } from '@nestjs/testing';
import { VideoSnapService } from './video-snap.service';

describe('VideoSnapService', () => {
  let service: VideoSnapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoSnapService],
    }).compile();

    service = module.get<VideoSnapService>(VideoSnapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
