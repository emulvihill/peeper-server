import { CreateVideoSnapInput } from './create-video-snap.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateVideoSnapInput extends PartialType(CreateVideoSnapInput) {
  id: number;
}
