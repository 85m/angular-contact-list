/**
 * TODO
 *
 * Requete http
 * filter pour la liste de contact
 * ajout / suppression de contact
 */

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { ContactModule }         from './contact/contact.module';

// import { ContactFilterPipe }  from './contact/contact-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ContactModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}