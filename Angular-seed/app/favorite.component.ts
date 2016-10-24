import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
	selector: 'favorite',
	templateUrl: 'app/favorite.template.html' ,
	inputs: ['isFavorite:is-favorite'],
	styles: [`
		.glyphicon-star {
			color: lime;
		}
	`]
	
})
export class FavoriteComponent {
	@Input('is-favorite') isFavorite = false;

	@Output() change = new EventEmitter();

	onClick(){
		this.isFavorite = !this.isFavorite;
		this.change.emit({
		newValue: this.isFavorite
		});
	}
}