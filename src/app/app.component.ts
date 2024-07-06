import { Component, ViewChild } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses = COURSES;

  @ViewChild(CourseCardComponent) card: Component | undefined;
  onCardClicked(course: Course) {
    console.log('card clicked', this.card);
  }
  browserEvent() {
    console.log('called');
  }
}
