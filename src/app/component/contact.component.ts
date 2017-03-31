import {Component} from '@angular/core';

@Component({
    selector:'contact-section',
    templateUrl:'./html-templates/contact.html',
    styles:[`
.jumbotron {
background: rgb(62, 177, 14);
color: #FFF;
border-radius: 0px;
}
.jumbotron-sm { padding-top: 24px;
padding-bottom: 24px; }
.jumbotron small {
color: #FFF;
}
.h1 small {
font-size: 24px;
}
`]
})

export class ContactComponent{
    
}