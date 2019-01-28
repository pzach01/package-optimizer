import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizedBoxesComponent } from './optimized-boxes.component';

describe('OptimizedBoxesComponent', () => {
  let component: OptimizedBoxesComponent;
  let fixture: ComponentFixture<OptimizedBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptimizedBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimizedBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
