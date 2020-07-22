import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {DrugsComponent} from './drugs/drugs.component';
import {DrugsService} from './drugs/drugs.service';
import {WeedCardComponent} from './drugs/weed-card/weed-card.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'drugs',
    pathMatch: 'full'
  },
  {
    path: 'drugs',
    component: DrugsComponent // container component
  }
];


@NgModule({
  declarations: [
    AppComponent,
    DrugsComponent,
    WeedCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    DrugsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
