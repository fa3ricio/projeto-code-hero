
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicsCollection } from 'app/models/comicsCollection';
import { SeriesCollection } from 'app/models/seriesCollection';
import { EventsCollection } from 'app/models/eventsCollection';

@Component({
  selector: 'app-character-detail-extras',
  templateUrl: './character-detail-extras.component.html',
  styleUrls: ['./character-detail-extras.component.css']
})
export class CharacterDetailExtrasComponent {

  @Input() itemContent$!: Observable<ComicsCollection> | Observable<SeriesCollection> | Observable<EventsCollection>;
  @Input() itemType!: string;

}
