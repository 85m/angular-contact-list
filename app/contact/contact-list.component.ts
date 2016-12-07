import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ContactService }  from './contact.service';

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
  contacts : any;
  private selectedId: number;

  constructor(
    public service: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.service.getAllContacts().subscribe(c => this.contacts = c);
  }

  isSelected(contact: any) { return contact.id === this.selectedId; }

  onSelect(contact: any) {
    this.router.navigate(['/detail', contact.id]);
  }
}