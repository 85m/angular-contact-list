import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ContactService {

  private contactUrl = '/app/contact/contactlist.json';
  arr;

  constructor(private http: Http){}

  getAllContacts() {
    return this.http.get(this.contactUrl)
        .map(response => response.json().data);

  }



  getContact(id:number | string) {
      return this.http.get(this.contactUrl)
          .map(response => response.json().data.find( elem => elem.id === id ));

  }



}