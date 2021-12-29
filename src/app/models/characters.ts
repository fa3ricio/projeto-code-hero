import { character } from "./character"

export class characters {
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
    results: [ character ]
  };
  etag?: string
}
