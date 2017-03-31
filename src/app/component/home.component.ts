import { Component } from '@angular/core';
import {Slider} from '../Entities/sliderEntity';
import {Carousel} from './carousal.component';
import {Slide} from './slide.componet'

@Component({
  selector: 'home-section',
  templateUrl:'./html-templates/home.html',

})

export class HomeComponent {
   //The time to show the next photo
    private NextPhotoInterval:number = 5000;
    //Looping or not
    private noLoopSlides:boolean = false;
    //Photos
    private slides:Slider[] = [];

    constructor() {
            this.addNewSlide();
    }

    private addNewSlide() {
         this.slides.push(
            {caption:'Hp hewet pav.)',id:1,image:'../app/images/comp1.jpg',link:'#'},
            {caption:'Red mi note 4(32 Gb)',id:2,image:'../app/images/iphone.jpg',link:'#'},
            {caption:'Apple ipad j5',id:3,image:'../app/images/ipad1.jpg',link:'#'}
        );
    }

}