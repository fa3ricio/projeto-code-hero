import { Character } from "./character"

export class Characters {
  code?: number;
  status?: string;
  copyright?: string;
  attributionText?: string;
  attributionHTML?: string;
  data?: {
    offset: number,
    limit: number,
    total: number,
    ount: number,
    results: [ Character ]
  };
  etag?: string
}
