import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiComponentexComponent } from './di-componentex.component';

describe('DiComponentexComponent', () => {
  let component: DiComponentexComponent;
  let fixture: ComponentFixture<DiComponentexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiComponentexComponent]
    });
    fixture = TestBed.createComponent(DiComponentexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
