import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ContactService }  from './contact.service';

@Component({
  template: `
    <div class="container col-4">
        <div class="container add-form">
            <h4>New contact</h4>
            <div class="row col-md-4"><label>firstname:</label> <input #heroFName /></div>
            <div class="row col-md-4"><label>lastname:</label> <input #heroLName /></div>
            <div class="row col-md-4"><label>email:</label> <input #heroEmail /></div>
            <div class="row col-md-1"><button (click)="addNewContact(
            {firstname:heroFName.value,
            lastname:heroLName.value,
            email:heroEmail.value
            });">Add</button></div>
      </div>
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
    // this.service.getAllContacts().subscribe(r => {console.log(r);});
  }

  isSelected(contact: any) { return contact.id === this.selectedId; }

  onSelect(contact: any) {
    this.router.navigate(['/detail', contact.id]);
  }

  addNewContact(newContact:any){
    this.service.create(newContact).subscribe(r=>{
      this.contacts.push(r);
    });

  }

}