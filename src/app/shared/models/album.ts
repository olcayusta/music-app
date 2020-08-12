import {Artist} from './artist';

export interface Album {
  id: number;
  title: string;
  length: number;
  cover: string;
  artists: Artist[];
}
