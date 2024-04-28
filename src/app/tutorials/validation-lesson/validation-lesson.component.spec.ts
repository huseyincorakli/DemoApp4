import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationLessonComponent } from './validation-lesson.component';

describe('ValidationLessonComponent', () => {
  let component: ValidationLessonComponent;
  let fixture: ComponentFixture<ValidationLessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationLessonComponent]
    });
    fixture = TestBed.createComponent(ValidationLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
