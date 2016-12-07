import { Component } from '@angular/core';

import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">BEip Contact List</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}