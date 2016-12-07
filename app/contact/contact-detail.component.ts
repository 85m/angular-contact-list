import 'rxjs/add/operator/switchMap';
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ContactService }  from './contact.service';

@Component({
  template: `
<div *ngIf="contactInfo">
    <h2>Detail of {{ contactInfo.last_name | uppercase }} {{ contactInfo.firstname }}</h2>
  <div class="container col-2">
    <div><label>Id: </label>{{ contactInfo.id }}</div>
    <div><label>Last name: </label> {{ contactInfo.firstname }}</div>
    <div><label>First name: </label> {{ contactInfo.last_name }}</div>
    <div><label>email: </label> {{ contactInfo.email }}</div>
    <p>
      <button (click)="goBack()">Back</button>
    </p>
  </div>
</div>
  `
})
export class ContactDetailComponent implements OnInit {
  contactInfo: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.route.params
        .switchMap( params => this.contactService.getContact( +params['id']) )
        .subscribe(cData => this.contactInfo = cData);
  }

  goBack() {
    this.router.navigate(['/contact']);
  }
}