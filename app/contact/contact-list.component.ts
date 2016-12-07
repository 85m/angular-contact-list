import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ContactService }  from './contact.service';

@Component({
  template: `
    <div class="container col-4">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="search-wrapper">
        <input class="col-md-4 search-bar " type="text" #filtername (keyup)="0">
        <i class="glyphicon glyphicon-search"></i>
        </div>
        <div class="col-md-4"></div>
      </div>
      <div class="row">
        <ul class="list-group">
          <li class="list-group-item" *ngFor="let contact of contacts | filter: filtername.value"
            [class.selected]="isSelected(contact)"
            (click)="onSelect(contact)">
            {{ contact.firstname }}
          </li>
        </ul>
        </div>
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

  fectKey(v:any){
    console.log(v);
  }
}