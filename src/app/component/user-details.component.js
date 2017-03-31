"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var UserDetailsComponent = (function () {
    function UserDetailsComponent() {
    }
    return UserDetailsComponent;
}());
UserDetailsComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "     \n  user deatils component \n  ",
        styleUrls: ['./app.component.css']
    })
], UserDetailsComponent);
exports.UserDetailsComponent = UserDetailsComponent;
function headerController() {
    var laptopMenu = [{
            description: 'Laptops',
            id: 'l_01',
            link: '_mobile',
            childrens: [{ title: 'Samsung', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                { title: 'Lenovo', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                { title: 'Mi', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                { title: 'LeEco', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                { title: 'Motorola', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                { title: 'Apple', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                { title: 'Asus', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                { title: 'Micromax', link: '_samsungMobiles', id: 'm_sm', isdisabled: false }]
        }, {
            description: 'Latest Laptops',
            id: 'l_02',
            link: '_latestMobile',
            childrens: [{ title: 'Samsung j5', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                { title: 'Lenovo vibe', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                { title: 'Mi note 4(63 Gb)', link: '_samsungMobiles', id: 'm_sm', isdisabled: false }
            ]
        }, {
            description: 'Laptop Accessories',
            id: 'l_03',
            link: '_latestMobile',
            childrens: [{ title: 'Mobile Cases', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                { title: 'Headphones/Headsets', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                { title: 'Power Banks', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                { title: 'Memory Cards', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                { title: 'Cables', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                { title: 'Charger', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                { title: 'Selfie Sticks', link: '_samsungMobiles', id: 'm_sm', isdisabled: false }
            ]
        }
    ];
}
//# sourceMappingURL=user-details.component.js.map