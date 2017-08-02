import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginZComponent } from './login-z.component';

describe('LoginZComponent', () => {
  let component: LoginZComponent;
  let fixture: ComponentFixture<LoginZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
