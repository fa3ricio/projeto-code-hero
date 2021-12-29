import { Items } from "./items";

export class Series {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: [Items];
}
