
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

  idModal?: number;
  itemModal?: string;
  itemTitle?: string;
  mostrarModal: boolean = false;

  toggle() {
    this.mostrarModal = !this.mostrarModal;
    this.bodyOverflow();
  }

  openModal(id?: number, title?: string, path?: string, extension?: string) {
    this.mostrarModal = !this.mostrarModal;
    this.idModal = id;
    this.itemTitle = title;
    this.itemModal = path + '.' + extension;
    this.bodyOverflow();
  }

  bodyOverflow() {
    this.mostrarModal ? (document.querySelector('.body') as HTMLElement).style.overflowY = 'hidden' : (document.querySelector('.body') as HTMLElement).style.overflowY = 'auto';
  }

}
