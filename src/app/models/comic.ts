import { Thumb } from './thumb';
import { Urls } from "./urls";

export class Comic {
  id?: number;
  digitalId?: number;
  title?: string;
  issueNumber?: number;
  variantDescription?: string;
  description?: string;
  modified?: Date;
  isbn?: string;
  upc?: string;
  diamondCode?: string;
  ean?: string;
  issn?: string;
  format?: string;
  pageCount?: number;
  textObjects?: [];
  resourceURI?: string;
  urls?: [Urls];
  series?: string;
  variants?: [];
  collections?: [];
  collectedIssues?: [];
  dates?: [];
  prices?: [];
  thumbnail?: Thumb;
  images?:  [];
  creators?: string;
  characters?: string;
  stories?: string;
  events?: string;
}
