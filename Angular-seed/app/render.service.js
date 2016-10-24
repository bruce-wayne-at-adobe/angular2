System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RenderService;
    return {
        setters:[],
        execute: function() {
            RenderService = (function () {
                function RenderService() {
                }
                RenderService.prototype.getRenders = function () {
                    return [
                        {
                            imageUrl: "./app/limelight_logo.jpg",
                            title: "Json Response",
                            handle: "@response1",
                            content: "This will be JSON!",
                            totalLikes: 9999,
                            iLike: false
                        },
                        {
                            imageUrl: "./app/HPIM1017.jpg",
                            title: "Json Response 2",
                            handle: "@response2",
                            content: "This will be more JSON!",
                            totalLikes: 9999,
                            iLike: true
                        }];
                };
                return RenderService;
            }());
            exports_1("RenderService", RenderService);
        }
    }
});
//# sourceMappingURL=render.service.js.map