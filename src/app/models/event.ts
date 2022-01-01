import { Thumb } from './thumb';
import { Urls } from "./urls";

export class Event {
  id?: number;
  title?: string;
  digitalId?: number;
  description?: string;
  resourceURI?: string;
  urls?: [Urls];
  modified?: Date;
  start?: Date;
  end?: Date;
  thumbnail?: Thumb;
  comics?: string;
  stories?: string;
  series?: string;
  characters?: string;
  creators?: string;
  next?: string;
  previous?: string;
}
