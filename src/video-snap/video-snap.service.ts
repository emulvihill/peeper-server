import { Injectable } from '@nestjs/common';
import { VideoSnap } from "./video-snap.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VideoSnapService {
  constructor(
    @InjectRepository(VideoSnap)
    private videoSnapRepository: Repository<VideoSnap>,
  ) { }

  create(input: VideoSnap): Promise<VideoSnap> {
    return this.videoSnapRepository.save(input);
  }

  findAll(): Promise<VideoSnap[]> {
    return this.videoSnapRepository.find();
  }

  findAllForFeed(feed: number): Promise<VideoSnap[]> {
    return this.videoSnapRepository.findBy({ feed });
  }

  findOne(id: number): Promise<VideoSnap | null> {
    return this.videoSnapRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.videoSnapRepository.delete(id);
  }
}
