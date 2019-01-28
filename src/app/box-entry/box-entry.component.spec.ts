import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxEntryComponent } from './box-entry.component';

describe('BoxEntryComponent', () => {
  let component: BoxEntryComponent;
  let fixture: ComponentFixture<BoxEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
