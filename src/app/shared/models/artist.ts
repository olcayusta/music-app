import {Album} from '@shared/models/album';

export interface Artist {
  id: number;
  displayName: string;
  picture: string;
  description: string;
  albums: Album[];
}
