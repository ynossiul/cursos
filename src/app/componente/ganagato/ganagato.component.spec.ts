import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanagatoComponent } from './ganagato.component';

describe('GanagatoComponent', () => {
  let component: GanagatoComponent;
  let fixture: ComponentFixture<GanagatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanagatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanagatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
