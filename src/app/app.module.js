"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./component/header.component");
var footer_component_1 = require("./component/footer.component");
var about_us_component_1 = require("./component/about-us.component");
var home_component_1 = require("./component/home.component");
var login_component_1 = require("./component/login.component");
var faq_component_1 = require("./component/faq.component");
var offer_component_1 = require("./component/offer.component");
var contact_component_1 = require("./component/contact.component");
var carousal_component_1 = require("./component/carousal.component");
var slide_componet_1 = require("./component/slide.componet");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent, about_us_component_1.AboutUsComponent, home_component_1.HomeComponent,
            login_component_1.LoginComponent, contact_component_1.ContactComponent, faq_component_1.FaqComponent, offer_component_1.OfferComponent, carousal_component_1.Carousel, slide_componet_1.Slide],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map