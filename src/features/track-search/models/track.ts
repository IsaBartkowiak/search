import { Artist } from './artist';

export interface Track {
    preview?: string;
    first_name?: string;
    id: number;
    title: string;
    artist: Artist;
    album?: {
        cover_small?: string;
    };
}
