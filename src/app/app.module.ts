import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }  from './app.component';
import {HeaderComponent} from './component/header.component';
import {FooterComponent} from './component/footer.component';
import {AboutUsComponent} from './component/about-us.component';
import { HomeComponent } from './component/home.component';
import { LoginComponent } from './component/login.component';
import { FaqComponent } from './component/faq.component';
import { OfferComponent } from './component/offer.component';
import { ContactComponent } from './component/contact.component';
import {Carousel} from './component/carousal.component';
import {Slide} from './component/slide.componet'; 
import {EmailService} from './service/email-service';

@NgModule({
  imports:    [ BrowserModule ,FormsModule, AppRoutingModule,HttpModule],
  declarations: [ AppComponent,HeaderComponent,FooterComponent,AboutUsComponent,HomeComponent,
                   LoginComponent,ContactComponent, FaqComponent,OfferComponent,Carousel,Slide],
   providers: [EmailService], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
 
