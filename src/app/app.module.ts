import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

// components
import { AppComponent }  from './app.component';
import { ItemsGrid }  from './items-grid.component';
import { ItemsDetail }  from './items-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/items/0', pathMatch: 'full' },
  { path: 'detail/:id', component: ItemsDetail },
  { path: 'items/:page',  component: ItemsGrid }
];

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  declarations: [
    AppComponent,
    ItemsGrid,
    ItemsDetail
  ],
  exports: [RouterModule],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
