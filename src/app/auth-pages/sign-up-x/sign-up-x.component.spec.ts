import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpXComponent } from './sign-up-x.component';

describe('SignUpXComponent', () => {
  let component: SignUpXComponent;
  let fixture: ComponentFixture<SignUpXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
