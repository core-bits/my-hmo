import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignEmployerComponent } from './assign-employer.component';

describe('AssignEmployerComponent', () => {
  let component: AssignEmployerComponent;
  let fixture: ComponentFixture<AssignEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
