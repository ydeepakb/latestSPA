import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <header-section></header-section>
  <main class="main-container-position">
  <router-outlet></router-outlet>
  </main>
  <footer-section></footer-section>
  `,
  styles:[`.main-container-position{
    margin-top:170px;margin-bottom:50px
  }`]
})
export class AppComponent  { name = 'Angular'; }
