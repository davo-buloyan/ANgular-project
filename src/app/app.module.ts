import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserService } from './services/user.service';
import { ReactiveFormsModule }   from '@angular/forms';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FirstComponent } from './about/first/first.component';
import { SecondComponent } from './about/first/second/second.component';
import { ThirdComponent } from './about/first/second/third/third.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    MatConfirmDialogComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    UserService
  ],
  entryComponents: [MatConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
