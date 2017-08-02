import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalSignUpComponent } from './hospital-sign-up.component';

describe('HospitalSignUpComponent', () => {
  let component: HospitalSignUpComponent;
  let fixture: ComponentFixture<HospitalSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
