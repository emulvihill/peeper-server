
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateVideoSnapInput {
    name: string;
    data: string;
}

export interface UpdateVideoSnapInput {
    id: number;
}

export interface VideoSnap {
    name: string;
    data: string;
}

export interface IQuery {
    videoSnaps(): Nullable<VideoSnap>[] | Promise<Nullable<VideoSnap>[]>;
    videoSnap(id: number): Nullable<VideoSnap> | Promise<Nullable<VideoSnap>>;
}

export interface IMutation {
    createVideoSnap(createVideoSnapInput: CreateVideoSnapInput): VideoSnap | Promise<VideoSnap>;
    updateVideoSnap(updateVideoSnapInput: UpdateVideoSnapInput): VideoSnap | Promise<VideoSnap>;
    removeVideoSnap(id: number): Nullable<VideoSnap> | Promise<Nullable<VideoSnap>>;
}

type Nullable<T> = T | null;
