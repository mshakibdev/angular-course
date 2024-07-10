import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, toArray, Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  courses!: Course[];
  courses$!: Observable<Course[]>;
  httpUrl = 'http://localhost:9000/api/courses';

  constructor(
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.courses$ = this.coursesService.loadCourses()
  }

  @ViewChild(CourseCardComponent) cardComponent!: Component;
  @ViewChild('cardRef', { read: ElementRef }) cardDom!: ElementRef;
  @ViewChild('container') contaierDiv!: ElementRef;
  onCardClicked(course: Course) {
    console.log('card component clicked', this.cardComponent);
    console.log('card dom clicked', this.cardDom);
    console.log('contaierDiv clicked', this.contaierDiv);
  }
  browserEvent() {
    console.log('called');
  }
}

//* without observable
// this.http
//   .get<{ payload: Course[] }>(this.httpUrl, { params })
//   .subscribe(({ payload }) => {
//     this.courses = payload;
//   });

//* with observable

//  this.courses$ = this.http
//    .get<{ payload: Course[] }>(this.httpUrl, {
//      params,
//    })
//    .pipe(map((courses) => courses.payload));
