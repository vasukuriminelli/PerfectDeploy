import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datashare1Component } from './datashare1.component';

describe('Datashare1Component', () => {
  let component: Datashare1Component;
  let fixture: ComponentFixture<Datashare1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Datashare1Component]
    });
    fixture = TestBed.createComponent(Datashare1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
