import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcompoexComponent } from './getcompoex.component';

describe('GetcompoexComponent', () => {
  let component: GetcompoexComponent;
  let fixture: ComponentFixture<GetcompoexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetcompoexComponent]
    });
    fixture = TestBed.createComponent(GetcompoexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
