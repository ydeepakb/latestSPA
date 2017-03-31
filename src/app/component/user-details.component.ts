import { Component,OnInit } from '@angular/core';
import {TopMenu} from '../Entities/menu';
import {MobileMenu,children} from '../Entities/mobile-menu';
@Component({
  selector: 'my-app',
  template: `     
  user deatils component 
  `,
  styleUrls:['./app.component.css']
})

export class UserDetailsComponent {

}

function headerController() {
   
    let laptopMenu = [{
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

    ]

}
