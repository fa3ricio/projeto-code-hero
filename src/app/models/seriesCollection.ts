import { Serie } from './serie';
export class SeriesCollection {
  code?: number;
  status?: string;
  copyright?: string;
  attributionText?: string;
  attributionHTML?: string;
  data?: {
    offset: number,
    limit: number,
    total: number,
    count: number,
    results: [ Serie ]
  };
  etag?: string
}
