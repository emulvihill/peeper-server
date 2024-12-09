import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VideoSnap {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    feed: number;

    @Column()
    data: string;
}
