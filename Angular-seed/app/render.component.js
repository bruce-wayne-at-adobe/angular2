System.register(['angular2/core', './like.component', './render.service', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, like_component_1, render_service_1, http_1;
    var RenderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (render_service_1_1) {
                render_service_1 = render_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            RenderComponent = (function () {
                function RenderComponent() {
                    this.title = "The title of the page";
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], RenderComponent.prototype, "data", void 0);
                RenderComponent = __decorate([
                    core_1.Component({
                        selector: 'render',
                        template: "\n\t\t<div class=\"media\">\n\t\t\t<div class=\"media-left\">\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img class=\"media-object\" src=\"{{ data.imageUrl}}\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"media-body\">\n\t\t\t\t<h4 class=\"media-heading\">\n\t\t\t\t\t{{ data.title }} <span class=\"handle\">{{ data.handle }}</span>\n\t\t\t\t</h4>\n\t\t\t\t{{ data.content }}\n\t\t\t\t{{azureJson}}\n\t\t\t\t<div>\n\t\t\t\t\t<like [totalLikes]=\"data.totalLikes\" [iLike]=\"data.iLike\"></like>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t\t\t",
                        styles: ["\n\t\t\t\t.handle {\n\t\t\t\t\tcolor: #lime;\n\t\t\t\t}\n\n\t\t\t\t.media {\n\t\t\t\tmargin-bottom: 20px;\n\t\t\t\t}\n\t\t\t\t.media-object {\n\t\t\t\t\tborder-radius: 10px;\n\t\t\t\t}\n\t\t\t"],
                        directives: [like_component_1.LikeComponent],
                        providers: [render_service_1.RenderService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RenderComponent);
                return RenderComponent;
            }());
            exports_1("RenderComponent", RenderComponent);
        }
    }
});
//# sourceMappingURL=render.component.js.map