import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { DrugsComponent } from './drugs/drugs.component';
import { DrugsService } from './drugs/drugs.service';

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
    DrugsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DrugsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
