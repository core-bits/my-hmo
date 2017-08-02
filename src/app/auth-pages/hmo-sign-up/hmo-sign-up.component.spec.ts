import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmoSignUpComponent } from './hmo-sign-up.component';

describe('HmoSignUpComponent', () => {
  let component: HmoSignUpComponent;
  let fixture: ComponentFixture<HmoSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmoSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmoSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
