import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablecompoComponent } from './observablecompo.component';

describe('ObservablecompoComponent', () => {
  let component: ObservablecompoComponent;
  let fixture: ComponentFixture<ObservablecompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservablecompoComponent]
    });
    fixture = TestBed.createComponent(ObservablecompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
