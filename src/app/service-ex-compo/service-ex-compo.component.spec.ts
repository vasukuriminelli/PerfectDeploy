import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceExCompoComponent } from './service-ex-compo.component';

describe('ServiceExCompoComponent', () => {
  let component: ServiceExCompoComponent;
  let fixture: ComponentFixture<ServiceExCompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceExCompoComponent]
    });
    fixture = TestBed.createComponent(ServiceExCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
