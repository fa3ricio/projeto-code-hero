import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailExtrasComponent } from './character-detail-extras.component';

describe('CharactersDetailExtrasComponent', () => {
  let component: CharacterDetailExtrasComponent;
  let fixture: ComponentFixture<CharacterDetailExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterDetailExtrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
