import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ContactListComponent }    from './contact-list.component';
import { ContactDetailComponent }  from './contact-detail.component';

import { ContactService } from './contact.service';

import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactListComponent,
    ContactDetailComponent
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule {}