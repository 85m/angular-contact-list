import { Injectable } from '@angular/core';
import { Response, Http, Headers} from '@angular/http';

@Injectable()
export class ContactService {

  /* fetch via json */
  private contactUrl = '/app/contact/contactlist.json';
  /* fetch via in memory db */
  private dbUrl = 'api/contacts';

  constructor(private http: Http){}

  getAllContacts() {
    // via json
    // return this.http.get(this.contactUrl).map(response => response.json().data);
    return this.http.get(this.dbUrl).map(response => response.json().data);

  }

  getContact(id:number | string) {

      // return this.http.get(this.contactUrl).map(response => response.json().data.find( (elem:any) => elem.id === id ));
      return this.http.get(this.dbUrl).map(response => response.json().data.find( (elem:any) => elem.id === id ));

  }

  /* CREATE */
  private headers = new Headers({'Content-Type': 'application/json'});
  create(newContact:any){
    return this.http
        .post(this.dbUrl, JSON.stringify(newContact), {headers: this.headers})
        .map(r => r.json().data);
  }
}