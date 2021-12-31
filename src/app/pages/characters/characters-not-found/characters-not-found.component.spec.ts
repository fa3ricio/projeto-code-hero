import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersNotFoundComponent } from './characters-not-found.component';

describe('CharactersNotFoundComponent', () => {
  let component: CharactersNotFoundComponent;
  let fixture: ComponentFixture<CharactersNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
