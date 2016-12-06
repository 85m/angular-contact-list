import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactListComponent }    from './contact-list.component';
import { ContactDetailComponent }  from './contact-detail.component';

const routes: Routes = [
  { path: 'contact',  component: ContactListComponent },
  { path: 'detail/:id', component: ContactDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule { }