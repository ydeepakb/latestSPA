import {Component} from '@angular/core';
import {Carousel} from './carousal.component';
import {Slider} from '../Entities/sliderEntity';
import {Slide} from './slide.componet'

@Component({
    selector:'offers',
   templateUrl:'./html-templates/offer.html'
})

export class OfferComponent{
     //The time to show the next photo
    private NextPhotoInterval:number = 5000;
    //Looping or not
    private noLoopSlides:boolean = false;
    //Photos
    private slides1:Slider[] = [];
    private slides2:Slider[] = [];
    private slides3:Slider[] = [];
   private finalSlide:any=[];
    constructor() {
            this.addNewSlide();
    }

    private addNewSlide() {
         this.slides1.push(
            {
            image: '../app/images/laptops/acer-aspire-notebook.jpeg',
            caption: 'acer-aspire-notebook',
            link:'#',
            id:11
          },
          {
              image: '../app/images/laptops/apple-macbook-air-ultrabook.jpeg',           
              caption: 'apple-macbook-air-ultrabook',
              link:'#',
              id:12
          },
          {
              image: '../app/images/laptops/dell-inspiron-15-notebook-original.jpeg',
            
              caption: 'dell-inspiron-15-notebook-original',
              link:'#',
              id:13
          })
     this.slides2.push(
       {    
            image: '../app/images/laptops/dell-inspiron-2-in-1-laptop.jpeg',
            caption: 'dell-inspiron-2-in-1-laptop',            
            link:'#',
            id:14
        },
        {
            image: '../app/images/laptops/hp-notebook-original.jpeg',
            caption: 'hp-notebook-original',                     
            link:'#',
            id:15
        },
        {
            image: '../app/images/laptops/hp-notebook.jpeg',
            caption: 'hp-notebook',                            
            link:'#',
            id:16
        })
   
       this.slides3.push(
        {
            image: '../app/images/laptops/hp-pavilion-notebook.jpeg',
            caption: 'hp-pavilion-notebook',                                     
            link:'#',
            id:13
        },
        {
            image: '../app/images/laptops/lenovo-notebook-original.jpeg',
            caption: 'lenovo-notebook-original',                                        
            link:'#',
            id:13
        },
        {
            image: '../app/images/laptops/micromax-lt.jpeg',
            caption: 'micromax-lt',                                       
            link:'#',
            id:13
        });
      this.finalSlide.push(this.slides1);
      this.finalSlide.push(this.slides2);
      this.finalSlide.push(this.slides3  );
    }
}
