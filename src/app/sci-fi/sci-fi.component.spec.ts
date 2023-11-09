import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciFiComponent } from './sci-fi.component';

describe('SciFiComponent', () => {
  let component: SciFiComponent;
  let fixture: ComponentFixture<SciFiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SciFiComponent]
    });
    fixture = TestBed.createComponent(SciFiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
