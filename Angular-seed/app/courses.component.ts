import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
	selector: 'courses',
	template: `

		<h2>Welcome To The Limelight!</h2>
		{{title}}
		<input type="text" autoGrow [value]="title" (input)="title = $event.target.value" />
		<input  type="text" [(ngModel)]="title" />
		<input  type="text" bindon-ngModel="title" />
		<input type="button" (click)="title = ''" value="clear" />		
		Preview: {{ title }}
		<ul>
			<li *ngFor="#course of courses">
				{{ course }}
			</li>
		</ul>
		`,
	providers: [CourseService],
	directives: [AutoGrowDirective]
})
export class CoursesComponent {
	title: = "LMG | Limelight Management Group";
	courses;

	constructor(courseService: CourseService){
		this.courses = courseService.getCourses();
	}
}
export class AuthorsComponent {
	title: = " The Limelight Internet Showcase, LLC";
	authors;

}
}