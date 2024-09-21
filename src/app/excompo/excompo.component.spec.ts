import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcompoComponent } from './excompo.component';

describe('ExcompoComponent', () => {
  let component: ExcompoComponent;
  let fixture: ComponentFixture<ExcompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcompoComponent]
    });
    fixture = TestBed.createComponent(ExcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
