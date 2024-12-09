
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface VideoSnapInput {
    feed: string;
    data: string;
}

export interface VideoSnap {
    id: string;
    feed: string;
    data: string;
}

export interface IQuery {
    videoSnaps(feed?: Nullable<string>): Nullable<VideoSnap>[] | Promise<Nullable<VideoSnap>[]>;
    videoSnap(id: string): Nullable<VideoSnap> | Promise<Nullable<VideoSnap>>;
}

export interface IMutation {
    createVideoSnap(input: VideoSnapInput): VideoSnap | Promise<VideoSnap>;
    removeVideoSnap(id: string): Nullable<VideoSnap> | Promise<Nullable<VideoSnap>>;
}

type Nullable<T> = T | null;
