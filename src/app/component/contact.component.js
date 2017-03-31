"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ContactComponent = (function () {
    function ContactComponent() {
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'contact-section',
        templateUrl: './html-templates/contact.html',
        styles: ["\n.jumbotron {\nbackground: rgb(62, 177, 14);\ncolor: #FFF;\nborder-radius: 0px;\n}\n.jumbotron-sm { padding-top: 24px;\npadding-bottom: 24px; }\n.jumbotron small {\ncolor: #FFF;\n}\n.h1 small {\nfont-size: 24px;\n}\n"]
    })
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map