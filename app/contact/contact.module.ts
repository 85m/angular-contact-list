import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ContactListComponent }    from './contact-list.component';
import { ContactDetailComponent }  from './contact-detail.component';

import { ContactService } from './contact.service';

import { ContactRoutingModule } from './contact-routing.module';

import { HttpModule }  from '@angular/http';

import { ContactFilterPipe } from './contact-filter.pipe';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './contact-db';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
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