import {Component, View} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {RenderComponent} from './render.component'
import {RenderService} from './render.service'
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {bootstrap} from 'angular2/platform/browser';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router-deprecated/ns-router-deprecated";
import { HttpModule } from '@angular/http';

@Component({
    selector: 'my-app',
    template: `
	    <h1>{{ title }}</h1><br>

	    <img src="{{ imageUrl }}" />
	    <img [src]="imageUrl" />
	    
	    <img bind-src="imageUrl" />
	    <br>
	    <button (click)="onClick($event)">Submit</button>
	    <button on-click="onClick()">Submit</button>
	    <courses></courses><br>
	    <authors></authors>
	    <i class="glyphicon glyphicon-heart"></i>
	    <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)" ></favorite>
	    <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
	    <div *ngFor="#render of renders">
			<render [data]="render"></render>
		</div>

	    	`,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, RenderComponent],
    providers: [RenderService]
})
export class AppComponent { 
	title: = "LMG | Limelight Management Group";
	imageUrl = "./app/limelight_logo.jpg";
	isActive = true;
	onClick($event){
		console.log("this works!!!!!", $event)
	}
	post = {
		title: "Title",
		isFavorite: true
	}

	onFavoriteChange($event){
		console.log($event);
	}

	tweet = {
		totalLikes: 9999999;
		iLike: false;
	}
	renders: any[];

	constructor(renderService: RenderService){
		this.renders = renderService.getRenders();
	}
}