import {Component} from '@angular/core';

@Component({
selector:'about-us',
templateUrl:'./html-templates/about.html',

})


export class AboutUsComponent
{
private aboutusText:string;
constructor(){
  this.aboutusText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu vulputate velit. Curabitur faucibus sem risus, in commodo dui posuere eget. Duis augue nunc, maximus vitae posuere in, sollicitudin a mauris. Duis elementum ultrices tortor rutrum condimentum. Sed hendrerit orci imperdiet, vehicula diam nec, tristique tortor. Donec vitae velit vehicula, suscipit massa non, volutpat risus. Praesent in erat quis quam ornare euismod. Vestibulum aliquam sit amet sapien nec egestas. Donec a felis eget est consectetur eleifend id id dolor. Nullam accumsan varius libero ut feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus venenatis blandit neque, in ornare ipsum molestie sed. In aliquet massa leo, ac gravida ipsum lobortis vel.' +
    'Praesent posuere dapibus quam scelerisque vehicula. Nunc sed dapibus elit. Praesent placerat felis bibendum sem dapibus, vitae blandit felis porta. Aenean convallis elit sapien, quis lacinia ex cursus id. Morbi maximus mauris nec nunc dapibus hendrerit. Sed cursus est diam, in ultrices diam tempor ut. Nunc nec neque lorem. Donec id ante magna. Donec suscipit ipsum facilisis lorem gravida egestas. Donec ornare justo quis odio commodo maximus eu vitae libero. Etiam sed neque ac magna ornare malesuada. Nam in lacinia libero. Fusce id semper turpis, ac vestibulum nulla. Cras lobortis rutrum justo, in varius justo fringilla non. Sed ornare arcu id lacus pulvinar lacinia. Pellentesque facilisis sed sem quis efficitur.' +
    'Integer hendrerit porttitor tempus. Cras sit amet nibh nisi. Suspendisse a eros lectus. Vivamus nec lorem et ante porta placerat. In maximus feugiat nisi, quis gravida nisl ultricies ac. Mauris suscipit, sapien nec consequat tincidunt, lorem quam hendrerit magna, at volutpat diam erat a nisl. Fusce ac sapien ac enim convallis consequat. Aliquam luctus rhoncus risus id vulputate. Donec euismod rhoncus ligula. Sed scelerisque, diam id consequat viverra, justo tellus accumsan quam, a pharetra elit ligula condimentum nisl.' +
    'Suspendisse et lorem feugiat, sagittis enim quis, eleifend massa. Vivamus faucibus velit nec consequat gravida. Donec sagittis, lorem sed suscipit interdum, diam ligula condimentum ante, ac convallis dui est gravida nibh. Etiam rhoncus lorem eget purus rhoncus mollis. Vestibulum tempus erat a finibus placerat. Curabitur eu ipsum tincidunt, venenatis ex in, faucibus massa. Donec tincidunt, elit sed posuere feugiat, purus dui malesuada nisl, quis interdum dolor risus a mi. Pellentesque pulvinar, tortor a dapibus sollicitudin, felis augue sagittis elit, non finibus diam felis sollicitudin nisi.';
}
} 
