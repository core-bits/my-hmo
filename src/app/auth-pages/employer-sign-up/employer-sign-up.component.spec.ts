import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerSignUpComponent } from './employer-sign-up.component';

describe('EmployerSignUpComponent', () => {
  let component: EmployerSignUpComponent;
  let fixture: ComponentFixture<EmployerSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
