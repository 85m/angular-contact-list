import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ContactListComponent }    from './contact-list.component';
import { ContactDetailComponent }  from './contact-detail.component';

import { ContactService } from './contact.service';

import { ContactRoutingModule } from './contact-routing.module';

import { HttpModule }  from '@angular/http';

import { ContactFilterPipe } from './contact-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule,
    HttpModule
  ],
  declarations: [
    ContactListComponent,
    ContactDetailComponent,
    ContactFilterPipe
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule {}