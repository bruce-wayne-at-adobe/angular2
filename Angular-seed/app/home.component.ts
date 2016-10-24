import {Component} from 'angular2/core';
import {RenderService} from './render.service';

@Component({
	selector: 'home',
	template: `
		<div class="media">
			<div class="media-left">
				<a href="#">
					<img class="media-object" src="{{ data.imageUrl}}" />
				</a>
			</div>
			<div class="media-body">
				<h4 class="media-heading">
					{{ data.title }} <span class="handle">{{ data.handle }}</span>
				</h4>
				{{ data.content }}
				<div>
					<like [totalLikes]="data.totalLikes" [iLike]="data.iLike"></like>
				</div>
			</div>
		</div>
				`,
			styles: [`
				.handle {
					color: #lime;
				}

				.media {
				margin-bottom: 20px;
				}
				.media-object {
					border-radius: 10px;
				}
			`],
			directives: [LikeComponent]
})
export class RenderComponent {
	constructor(){
		console.log(this.data);
	}
	@Input() data;
}

})