"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.topMenus = [];
        this.mobilleMenus = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.topMenus = [{ name: 'Home', link: '_home', icon: '', order: 1 },
            { name: 'Offers', link: '_offers', icon: '', order: 2 },
            { name: 'About', link: '_about', icon: '', order: 3 },
            { name: 'FAQ', link: '_faq', icon: '', order: 4 },
            { name: 'Contact', link: '_contact', icon: '', order: 5 },
            { name: 'Login', link: '_login', icon: '', order: 6 }];
        var child1;
        var child2;
        var child3;
        child1 = [{ title: 'Samsung', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
            { title: 'Lenovo', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
            { title: 'Mi', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
            { title: 'LeEco', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
            { title: 'Motorola', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
            { title: 'Apple', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
            { title: 'Asus', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
            { title: 'Micromax', link: '_samsungMobiles', id: 'm_sm', isdisabled: false }];
        child2 = [{ title: 'Samsung j5', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
            { title: 'Lenovo vibe', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
            { title: 'Mi note 4(63 Gb)', link: '_samsungMobiles', id: 'm_sm', isdisabled: false }];
        child3 = [{ title: 'Mobile Cases', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
            { title: 'Headphones/Headsets', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
            { title: 'Power Banks', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
            { title: 'Memory Cards', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
            { title: 'Cables', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
            { title: 'Charger', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
            { title: 'Selfie Sticks', link: '_samsungMobiles', id: 'm_sm', isdisabled: false }];
        this.mobilleMenus = [{
                description: 'Mobiles',
                id: 'm_01',
                link: '_mobile',
                childrens: child1
            },
            {
                description: 'Latest Mobiles',
                id: 'm_02',
                link: '_latestMobile',
                childrens: child2
            },
            {
                description: 'Mobile Accessories',
                id: 'm_03',
                link: '_latestMobile',
                childrens: child3
            }];
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'header-section',
        templateUrl: './html-templates/header.html',
        styleUrls: ['./css/header-page.css']
    })
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map