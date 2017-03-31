import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home.component';
import { AboutUsComponent } from './component/about-us.component';

import { LoginComponent } from './component/login.component';
import { FaqComponent } from './component/faq.component';
import { OfferComponent } from './component/offer.component';
import { ContactComponent } from './component/contact.component';


const routes: Routes = [
  { path: '', redirectTo: '/_home', pathMatch: 'full' }, 
  { path: '_home', component:HomeComponent},
  { path:'_about',component:AboutUsComponent},
  { path:'_login',component:LoginComponent},
  { path:'_contact',component:ContactComponent},
  { path:'_faq',component:FaqComponent},
  { path:'_offers',component:OfferComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}