import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalloWinComponent } from './gallo-win.component';

describe('GalloWinComponent', () => {
  let component: GalloWinComponent;
  let fixture: ComponentFixture<GalloWinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalloWinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalloWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
