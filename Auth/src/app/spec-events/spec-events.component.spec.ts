import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecEventsComponent } from './spec-events.component';

describe('SpecEventsComponent', () => {
  let component: SpecEventsComponent;
  let fixture: ComponentFixture<SpecEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
