import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormhandligAssignmentComponent } from './formhandlig-assignment.component';

describe('FormhandligAssignmentComponent', () => {
  let component: FormhandligAssignmentComponent;
  let fixture: ComponentFixture<FormhandligAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormhandligAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormhandligAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
