import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent, MockModule } from 'ng-mocks';
import { CharactersComponent } from './characters.component';
import { CharactersSearchComponent } from './../characters-search/characters-search.component';
import { FooterComponent } from './../../components/footer/footer/footer.component';
import { Loader } from './../../../shared/loader/loader';
import { NgxPaginationModule } from 'ngx-pagination';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;
  let fixtureLoader: ComponentFixture<Loader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
          CharactersComponent,
          Loader,
          MockComponent(CharactersSearchComponent),
          MockComponent(FooterComponent),
        ],
        imports: [
          HttpClientTestingModule,
          RouterTestingModule,
          MockModule(NgxPaginationModule)
        ],
        schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a Child Component <app-loader></app-loader>', () => {
    const { debugElement } = fixture;
    const loader = debugElement.query(By.css('app-loader'));
    expect(loader).toBeTruthy();
  });

  it('should have a initial value "true" to [fullLoader] in <app-loader></app-loader>', () => {
    fixtureLoader = TestBed.createComponent(Loader);
    const loader = fixtureLoader.componentInstance;
    expect(loader.fullLoader).toBe(true)
  });
});

