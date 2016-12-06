import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ContactC, ContactService }  from './contact.service';

@Component({
  template: `
    <div class="container col-4">
        <ul class="list-group">
          <li class="list-group-item" *ngFor="let contact of contacts"
            [class.selected]="isSelected(contact)"
            (click)="onSelect(contact)">
            {{ contact.firstname }}
          </li>
        </ul>
    </div>

  `
})
export class ContactListComponent implements OnInit {

  contacts: Observable<ContactC[]>;

  private selectedId: number;

  constructor(
    public service: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
/*    this.contacts = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getAllContacts();
      });*/
    this.contacts = this.service.getAllContacts();
  }

  isSelected(contact: ContactC) { return contact.id === this.selectedId; }

  onSelect(contact: ContactC) {
    this.router.navigate(['/detail', contact.id]);
  }
}