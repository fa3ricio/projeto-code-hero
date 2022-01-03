import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as info in the Header', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const appHeader = fixture.componentInstance;
    fixture.detectChanges();
    expect(appHeader.desenvolvedorAngular).toEqual('Fabricio Soares');
    expect(appHeader.linkedin).toEqual('https://www.linkedin.com/in/fabricio-soares-501835bb/');
    expect(appHeader.email).toEqual('fabriciosoares.pr@gmail.com');
    expect(appHeader.profile).toEqual(false);
  });

  it('should have a Div with id MenuProfile', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const appHeader = fixture.componentInstance;
    fixture.detectChanges();
    expect(appHeader.menuProfile).toEqual(jasmine.any(ElementRef));
  });

});
