// import { MockTracks } from './tracks.mock';
import axios, { AxiosPromise } from 'axios';
import { Track } from '../features/track-search/models/track';

const URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=track:';
export const tracksApi = {
  search: (term: string, offset: number = 0): AxiosPromise<Track[]> => {
    return axios.get(`${URL}${term}&offset=${offset}&limit=20`);
  },
};