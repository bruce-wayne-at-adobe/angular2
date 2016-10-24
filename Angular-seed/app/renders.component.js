System.register(['angular2/core', './render.service', './render.component'], function(exports_1, context_1) {
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
    var core_1, render_service_1, render_component_1;
    var RendersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (render_service_1_1) {
                render_service_1 = render_service_1_1;
            },
            function (render_component_1_1) {
                render_component_1 = render_component_1_1;
            }],
        execute: function() {
            RendersComponent = (function () {
                function RendersComponent(renderService) {
                    this.renders = renderService.getRenders();
                }
                RendersComponent = __decorate([
                    core_1.Component({
                        selector: 'renders',
                        template: "\n\t\t<div *ngFor=\"#render of renders\">\n\t\t\t<render [data]=\"render\"></render>\n\t\t</div>\n\t",
                        providers: [render_service_1.RenderService],
                        directives: [render_component_1.RenderComponent]
                    }), 
                    __metadata('design:paramtypes', [render_service_1.RenderService])
                ], RendersComponent);
                return RendersComponent;
            }());
            exports_1("RendersComponent", RendersComponent);
        }
    }
});
//# sourceMappingURL=renders.component.js.map