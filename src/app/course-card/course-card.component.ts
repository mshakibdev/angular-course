import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  @Input({ required: true }) course: Course | undefined;
  @Input() cardIndex: number | undefined;
  @Output() courseSelceted = new EventEmitter<Course>();
  onCourseViewed() {
    console.log('opk');
    this.courseSelceted.emit(this.course);
  }
}
