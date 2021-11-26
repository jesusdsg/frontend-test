"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var frontend_component_1 = require("./components/frontend/frontend.component");
var main_component_1 = require("./components/frontend/main/main.component");
var about_component_1 = require("./components/frontend/about/about.component");
var services_component_1 = require("./components/frontend/services/services.component");
var team_component_1 = require("./components/frontend/team/team.component");
var info_component_1 = require("./components/frontend/info/info.component");
var footer_component_1 = require("./components/frontend/footer/footer.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                frontend_component_1.FrontendComponent,
                main_component_1.MainComponent,
                about_component_1.AboutComponent,
                services_component_1.ServicesComponent,
                team_component_1.TeamComponent,
                info_component_1.InfoComponent,
                footer_component_1.FooterComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ng_bootstrap_1.NgbModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
