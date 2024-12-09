import { Injectable } from '@nestjs/common';
import { CreateVideoSnapInput } from './dto/create-video-snap.input';
import { UpdateVideoSnapInput } from './dto/update-video-snap.input';
import {VideoSnap} from "./entities/video-snap.entity";

@Injectable()
export class VideoSnapService {
  create(createVideoSnapInput: CreateVideoSnapInput) {
    return 'This action adds a new videoSnap';
  }

  findAll() {
    return [new VideoSnap("foo", "bar")];
  }

  findOne(id: number) {
    return new VideoSnap("foo", "bar");
  }

  update(id: number, updateVideoSnapInput: UpdateVideoSnapInput) {
    return `This action updates a #${id} videoSnap`;
  }

  remove(id: number) {
    return `This action removes a #${id} videoSnap`;
  }
}
