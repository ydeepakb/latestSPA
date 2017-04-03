import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,Headers   }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()//The @Injectable() decorator tells TypeScript to emit metadata about the service.

//  this.emailService.sendEmail('check') 
export class EmailService {

constructor (private http: Http) {}
 
  private heroesUrl= 'http://10.169.224.160/From26services/Form26service.svc/';   
  private options: RequestOptions;
  private headers = new Headers();
  sendEmail(message:string)  {
       

     this.http.get(this.heroesUrl+'sendMail?details="Email Test in network"') 
     .subscribe()                  
                  
  }
   private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
