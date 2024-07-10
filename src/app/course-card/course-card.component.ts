import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {

  constructor(private coursesServices: CoursesService) {}

  @Input({ required: true }) course: Course | undefined;
  @Input() cardIndex: number | undefined;
  @Output() courseSelceted = new EventEmitter<Course>();

  ngOnInit(): void {
    console.log(this.coursesServices);
  }
  onCourseViewed() {
    console.log('opk');
    this.courseSelceted.emit(this.course);
  }
  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course?.category === 'BEGINNER') {
      return 'beginner';
    }
    return null;
  }
}
