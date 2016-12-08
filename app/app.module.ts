/**
 * TODO
 *
 * Requete http
 * filter pour la liste de contact
 * ajout / suppression de contact
 *
 * DONE
 * http resuest + combination in memory db
 * filtre contact
 * ajout dd'un nouveau contact
 *
 */

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { ContactModule }         from './contact/contact.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ContactModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}