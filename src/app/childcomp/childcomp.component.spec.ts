import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcompComponent } from './childcomp.component';

describe('ChildcompComponent', () => {
  let component: ChildcompComponent;
  let fixture: ComponentFixture<ChildcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildcompComponent]
    });
    fixture = TestBed.createComponent(ChildcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
