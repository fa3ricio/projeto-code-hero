import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockModule } from 'ng-mocks'
import { SharedModule } from './../../../shared/shares.module';
import { CharactersSearchComponent } from './characters-search.component';

describe('CharactersSearchComponent', () => {
  let injector: TestBed;
  let component: CharactersSearchComponent;
  let fixture: ComponentFixture<CharactersSearchComponent>;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MockModule(SharedModule),
      ],
      declarations: [
        CharactersSearchComponent
      ],
    })
    .compileComponents()
    .then(() => {
      injector = getTestBed();
      httpClient = TestBed.inject(HttpClient);
      httpMock = TestBed.inject(HttpTestingController);
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
