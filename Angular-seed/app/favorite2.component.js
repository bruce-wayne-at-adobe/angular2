System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Favorite2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Favorite2Component = (function () {
                function Favorite2Component() {
                    this.isFavorite = false;
                    this.change = new core_1.EventEmitter();
                }
                Favorite2Component.prototype.onClick = function () {
                    this.isFavorite = !this.isFavorite;
                    this.change.emit({
                        newValue: this.isFavorite
                    });
                };
                __decorate([
                    core_1.Input('is-favorite'), 
                    __metadata('design:type', Object)
                ], Favorite2Component.prototype, "isFavorite", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Favorite2Component.prototype, "change", void 0);
                Favorite2Component = __decorate([
                    core_1.Component({
                        selector: 'favorite',
                        templateUrl: 'app/favorite.template.html',
                        inputs: ['isFavorite:is-favorite'],
                        styles: ["\n\t\t.glyphicon-star {\n\t\t\tcolor: lime;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Favorite2Component);
                return Favorite2Component;
            }());
            exports_1("Favorite2Component", Favorite2Component);
        }
    }
});
//# sourceMappingURL=favorite2.component.js.map