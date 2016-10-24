import {Component} from 'angular2/core';
import {AuthorService} from './author.service';

@Component({
	selector: 'authors',
	template: `
		<h2> What Can The Limelight Do For You?!</h2>
		{{ title }}
		<ul>
			<li *ngFor="#author of authors">
			{{ author }}
			</li>
		</ul>
	`,
	providers: [AuthorService]
})
export class AuthorsComponent {
	title = "LMG | Limelight Management Group";
	authors: string[];

	constructor(authorService: AuthorService){
		this.authors = authorService.getAuthors();
	}
}