import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Course } from '../model/course';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root', //* v3 -Tree-Shakeable Provider
  //v2- useClass: CoursesService,
  //v1- useFactory: (http: HttpClient) => new CoursesService(http),
  //v1- deps: [HttpClient],
})
export class CoursesService {
  httpUrl = `http://localhost:9000/api/courses`;

  constructor(private http: HttpClient) {
    console.log('only once');
  }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams().set('page', 1).set('pageSize', 10);

    return this.http
      .get<{ payload: Course[] }>(this.httpUrl, {
        params,
      })
      .pipe(map((courses) => courses.payload));
  }
  saveCourse(course: Course) {
    const headers = new HttpHeaders().set('X-Auth', 'userId');
    return this.http.put(this.httpUrl + `/${course.id}`, course, { headers });
  }
}
