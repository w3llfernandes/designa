import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html'
})
export class CourseDetailsComponent {
  constructor(private route: ActivatedRoute) { }

  public slug: string = this.route.snapshot.params.slug;
}



