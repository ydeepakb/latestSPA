"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
        //The time to show the next photo
        this.NextPhotoInterval = 5000;
        //Looping or not
        this.noLoopSlides = false;
        //Photos
        this.slides = [];
        this.addNewSlide();
    }
    HomeComponent.prototype.addNewSlide = function () {
        this.slides.push({ caption: 'Hp hewet pav.)', id: 1, image: '../app/images/comp1.jpg', link: '#' }, { caption: 'Red mi note 4(32 Gb)', id: 2, image: '../app/images/iphone.jpg', link: '#' }, { caption: 'Apple ipad j5', id: 3, image: '../app/images/ipad1.jpg', link: '#' });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home-section',
        templateUrl: './html-templates/home.html',
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map