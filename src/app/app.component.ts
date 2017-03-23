import { Component } from '@angular/core';

// Component
@Component({
  selector: 'my-app',
  template: `
    <h1 class="text-center"><a [routerLink]="['/items', 0]">Billy-Bob's warehouse</a></h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
