import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  @Input({ required: true }) course: Course | undefined;

  @Output() courseSelceted = new EventEmitter<Course>();
  onCourseViewed() {
    console.log('opk');
    this.courseSelceted.emit(this.course);
  }
 
}
