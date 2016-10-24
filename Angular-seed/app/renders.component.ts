import {Component} from 'angular2/core'
import {RenderService} from './render.service'
import {RenderComponent} from './render.component'

@Component({
	selector: 'renders',
	template: `
		<div *ngFor="#render of renders">
			<render [data]="render"></render>
		</div>
	`,
	providers: [RenderService],
	directives: [RenderComponent]
})
export class RendersComponent {
	renders: any[];

	constructor(renderService: RenderService) {
		this.renders = renderService.getRenders();
	}
}