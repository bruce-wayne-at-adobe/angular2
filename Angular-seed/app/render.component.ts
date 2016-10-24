import {Component, Input} from 'angular2/core';
import {LikeComponent} from './like.component';
import {RenderService} from './render.service';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router-deprecated/ns-router-deprecated";

@Component({
	selector: 'render'
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
				{{azureJson}}
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
			directives: [LikeComponent],
			providers: [RenderService, HTTP_PROVIDERS]
})
export class RenderComponent {
	title = "The title of the page";
	renders;


	@Input() data;
	
}





 