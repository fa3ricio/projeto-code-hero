import { Thumb } from './thumb';
import { Urls } from "./urls";

export class Serie {
  id?: number;
  title?: string;
  digitalId?: number;
  description?: string;
  resourceURI?: string;
  urls?: [Urls];
  startYear?: number;
  endYear?: number;
  rating?: string;
  modified?: Date;
  thumbnail?: Thumb;
  comics?: string;
  stories?: string;
  series?: string;
  characters?: string;
  creators?: string;
  next?: string;
  previous?: string;
}
