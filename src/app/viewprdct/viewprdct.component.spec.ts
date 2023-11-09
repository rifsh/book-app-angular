import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprdctComponent } from './viewprdct.component';

describe('ViewprdctComponent', () => {
  let component: ViewprdctComponent;
  let fixture: ComponentFixture<ViewprdctComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewprdctComponent]
    });
    fixture = TestBed.createComponent(ViewprdctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
