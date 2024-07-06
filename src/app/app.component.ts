import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses = COURSES;
 

  onCardClicked(course: Course) {
    console.log('card clicked', course);
  }
  browserEvent() {
    console.log('called');
  }
}
