import { Event } from './event';
export class EventsCollection {
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
    results: [ Event ]
  };
  etag?: string
}
