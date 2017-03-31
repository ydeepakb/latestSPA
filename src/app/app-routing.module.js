"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./component/home.component");
var about_us_component_1 = require("./component/about-us.component");
var login_component_1 = require("./component/login.component");
var faq_component_1 = require("./component/faq.component");
var offer_component_1 = require("./component/offer.component");
var contact_component_1 = require("./component/contact.component");
var routes = [
    { path: '', redirectTo: '/_home', pathMatch: 'full' },
    { path: '_home', component: home_component_1.HomeComponent },
    { path: '_about', component: about_us_component_1.AboutUsComponent },
    { path: '_login', component: login_component_1.LoginComponent },
    { path: '_contact', component: contact_component_1.ContactComponent },
    { path: '_faq', component: faq_component_1.FaqComponent },
    { path: '_offers', component: offer_component_1.OfferComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map