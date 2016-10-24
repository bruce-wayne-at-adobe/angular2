System.register(['angular2/core', './courses.component', './authors.component', './favorite.component', './like.component', './render.component', './render.service', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, favorite_component_1, like_component_1, render_component_1, render_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (render_component_1_1) {
                render_component_1 = render_component_1_1;
            },
            function (render_service_1_1) {
                render_service_1 = render_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(renderService) {
                    this.title = "LMG | Limelight Management Group";
                    this.imageUrl = "./app/limelight_logo.jpg";
                    this.isActive = true;
                    this.post = {
                        title: "Title",
                        isFavorite: true
                    };
                    this.tweet = {
                        totalLikes: 9999999,
                        iLike: false
                    };
                    this.renders = renderService.getRenders();
                }
                AppComponent.prototype.onClick = function ($event) {
                    console.log("this works!!!!!", $event);
                };
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t    <h1>{{ title }}</h1><br>\n\n\t    <img src=\"{{ imageUrl }}\" />\n\t    <img [src]=\"imageUrl\" />\n\t    \n\t    <img bind-src=\"imageUrl\" />\n\t    <br>\n\t    <button (click)=\"onClick($event)\">Submit</button>\n\t    <button on-click=\"onClick()\">Submit</button>\n\t    <courses></courses><br>\n\t    <authors></authors>\n\t    <i class=\"glyphicon glyphicon-heart\"></i>\n\t    <favorite [is-favorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\" ></favorite>\n\t    <like [totalLikes]=\"tweet.totalLikes\" [iLike]=\"tweet.iLike\"></like>\n\t    <div *ngFor=\"#render of renders\">\n\t\t\t<render [data]=\"render\"></render>\n\t\t</div>\n\n\t    \t",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, render_component_1.RenderComponent],
                        providers: [render_service_1.RenderService]
                    }), 
                    __metadata('design:paramtypes', [render_service_1.RenderService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map