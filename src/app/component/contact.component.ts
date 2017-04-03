import {Component} from '@angular/core';
import {UserContactDetails} from '../Entities/user-contact-details';
import {EmailService} from '../service/email-service';

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
.ng-valid[required], .ng-valid.required  {
  border-left: 5px solid #42A948; /* green */
}
.ng-invalid:not(form)  {
  border-left: 5px solid #a94442; /* red */
}
`]
})

export class ContactComponent{
    model= new UserContactDetails();
    constructor(private emailService: EmailService){

    }
    onSubmit(){
      if(this.model.message!='' && this.emailValidator(this.model.email)){
          debugger;
          //call service to send email
           this.emailService.sendEmail('check')
                

      }
    }
    emailValidator(email:string): boolean {                  
         var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;   
    
        if (!EMAIL_REGEXP.test(email)) {           
            return false;
        }
        
        return true; 
    }
}
