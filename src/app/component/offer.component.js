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
var OfferComponent = (function () {
    function OfferComponent() {
        //The time to show the next photo
        this.NextPhotoInterval = 5000;
        //Looping or not
        this.noLoopSlides = false;
        //Photos
        this.slides1 = [];
        this.slides2 = [];
        this.slides3 = [];
        this.finalSlide = [];
        this.addNewSlide();
    }
    OfferComponent.prototype.addNewSlide = function () {
        this.slides1.push({
            image: '../app/images/laptops/acer-aspire-notebook.jpeg',
            caption: 'acer-aspire-notebook',
            link: '#',
            id: 11
        }, {
            image: '../app/images/laptops/apple-macbook-air-ultrabook.jpeg',
            caption: 'apple-macbook-air-ultrabook',
            link: '#',
            id: 12
        }, {
            image: '../app/images/laptops/dell-inspiron-15-notebook-original.jpeg',
            caption: 'dell-inspiron-15-notebook-original',
            link: '#',
            id: 13
        });
        this.slides2.push({
            image: '../app/images/laptops/dell-inspiron-2-in-1-laptop.jpeg',
            caption: 'dell-inspiron-2-in-1-laptop',
            link: '#',
            id: 14
        }, {
            image: '../app/images/laptops/hp-notebook-original.jpeg',
            caption: 'hp-notebook-original',
            link: '#',
            id: 15
        }, {
            image: '../app/images/laptops/hp-notebook.jpeg',
            caption: 'hp-notebook',
            link: '#',
            id: 16
        });
        this.slides3.push({
            image: '../app/images/laptops/hp-pavilion-notebook.jpeg',
            caption: 'hp-pavilion-notebook',
            link: '#',
            id: 13
        }, {
            image: '../app/images/laptops/lenovo-notebook-original.jpeg',
            caption: 'lenovo-notebook-original',
            link: '#',
            id: 13
        }, {
            image: '../app/images/laptops/micromax-lt.jpeg',
            caption: 'micromax-lt',
            link: '#',
            id: 13
        });
        this.finalSlide.push(this.slides1);
        this.finalSlide.push(this.slides2);
        this.finalSlide.push(this.slides3);
    };
    return OfferComponent;
}());
OfferComponent = __decorate([
    core_1.Component({
        selector: 'offers',
        templateUrl: './html-templates/offer.html'
    }),
    __metadata("design:paramtypes", [])
], OfferComponent);
exports.OfferComponent = OfferComponent;
//# sourceMappingURL=offer.component.js.map