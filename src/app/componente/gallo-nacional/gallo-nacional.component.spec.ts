import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalloNacionalComponent } from './gallo-nacional.component';

describe('GalloNacionalComponent', () => {
  let component: GalloNacionalComponent;
  let fixture: ComponentFixture<GalloNacionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalloNacionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalloNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
