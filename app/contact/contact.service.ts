import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

export class ContactC {
  constructor(public id: number, public name: string) { }
}

let CONTACTS = [{id:1,firstname:"Julia",last_name:"Young",email:"jyoung0@blogtalkradio.com"},
  {id:2,firstname:"Paula",last_name:"Mitchell",email:"pmitchell1@arstechnica.com"},
  {id:3,firstname:"Gary",last_name:"Schmidt",email:"gschmidt2@live.com"},
  {id:4,firstname:"Bonnie",last_name:"Henry",email:"bhenry3@nps.gov"},
  {id:5,firstname:"Katherine",last_name:"Mills",email:"kmills4@hatena.ne.jp"},
  {id:6,firstname:"Brian",last_name:"Ray",email:"bray5@sfgate.com"},
  {id:7,firstname:"Linda",last_name:"Patterson",email:"lpatterson6@apple.com"},
  {id:8,firstname:"Anne",last_name:"Medina",email:"amedina7@usnews.com"},
  {id:9,firstname:"Amy",last_name:"Parker",email:"aparker8@shop-pro.jp"},
  {id:10,firstname:"Louis",last_name:"Romero",email:"lromero9@mail.ru"},
  {id:11,firstname:"Judy",last_name:"Harper",email:"jharpera@prlog.org"},
  {id:12,firstname:"Ashley",last_name:"Arnold",email:"aarnoldb@about.com"},
  {id:13,firstname:"Michael",last_name:"Hicks",email:"mhicksc@mayoclinic.com"},
  {id:14,firstname:"Kathryn",last_name:"Cook",email:"kcookd@google.co.uk"},
  {id:15,firstname:"Wanda",last_name:"Taylor",email:"wtaylore@wp.com"},
  {id:16,firstname:"Joan",last_name:"Dixon",email:"jdixonf@google.co.uk"},
  {id:17,firstname:"Brandon",last_name:"Harris",email:"bharrisg@plala.or.jp"},
  {id:18,firstname:"Jean",last_name:"Washington",email:"jwashingtonh@squidoo.com"},
  {id:19,firstname:"Marie",last_name:"Allen",email:"malleni@cnn.com"},
  {id:20,firstname:"Denise",last_name:"Green",email:"dgreenj@springer.com"}]

let contactPromise = Promise.resolve(CONTACTS);

@Injectable()
export class ContactService {
  getAllContacts() {
    return CONTACTS;
  }

  getContact(id:number | string) {
    return contactPromise
        .then(contactList => contactList.find(contactElement => contactElement.id === +id));
  }
}