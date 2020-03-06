import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChispazoComponent } from './chispazo.component';

describe('ChispazoComponent', () => {
  let component: ChispazoComponent;
  let fixture: ComponentFixture<ChispazoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChispazoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChispazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
