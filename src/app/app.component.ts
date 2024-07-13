import {
  Component,
  ElementRef,
  Inject,
  InjectionToken,
  OnInit,
  ViewChild,
} from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, toArray, Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';

// * factory function which creates the dependecy instance
//v1- function courseServiceProvider(http: HttpClient): CoursesService {
//   return new CoursesService(http);
// }

// * injection token a unique identifier for a dependency
//v1- export const COURSES_SERVICE = new InjectionToken<CoursesService>(
//   'COURSES_SERVICE'
// );
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // * telling angular how to create dependency
  // * { provide: UNIQUE_TOKEN, useFactory: factoryFunction() }
  // providers: [
    //! Not singleton
    //v3- CoursesService, //^ use class name as an unique identifier + calls new constructor on this class  and all the dependency as well
    // {
    //v1- provide: COURSES_SERVICE,
    //v1- useFactory: courseServiceProvider,
    //v1- deps: [HttpClient],
    //v2- provide: CoursesService, //~ use class name as an unique identifier
    //v2- useClass: CoursesService, //~ angular calls new constructor on this class  and all the dependency as well
    // },
  // ],
})
export class AppComponent implements OnInit {
  courses!: Course[];
  courses$!: Observable<Course[]>;
  httpUrl = 'http://localhost:9000/api/courses';

  constructor(
    //v1- @Inject(COURSES_SERVICE) private coursesService: CoursesService
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.courses$ = this.coursesService.loadCourses();
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

  save(course: Course) {
    this.coursesService
      .saveCourse(course)
      .subscribe(() => console.log('course saved'));
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
