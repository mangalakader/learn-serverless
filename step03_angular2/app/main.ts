import { bootstrap }    from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { HTTP_PROVIDERS, Http, Headers } from '@angular/http';


@Component({
    selector: 'my-app',
   template: `
       <div>
       API called
	   </div>
       {{response}}
        

	`
})
class AppComponent { 
	private serviceUrl = 'https://8okx9hulu1.execute-api.us-east-1.amazonaws.com/dev/mypost?value1=9';  // URL to service
    private response: string = 'Sending message';

	constructor(private http: Http){
        this.post();
	}
	
    private post() {
        let headers = new Headers({'Content-Type': 'application/json'});
        let request = { name: "zia" };
        this.http
             .post(this.serviceUrl, JSON.stringify(request), {headers: headers}).subscribe((res => this.response = res._body));
             //.toPromise()
             //.then(res => res.json().data)
             //.catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
	
}
bootstrap(AppComponent, [HTTP_PROVIDERS]);



