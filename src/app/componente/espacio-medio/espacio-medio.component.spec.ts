import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioMedioComponent } from './espacio-medio.component';

describe('EspacioMedioComponent', () => {
  let component: EspacioMedioComponent;
  let fixture: ComponentFixture<EspacioMedioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacioMedioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacioMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
