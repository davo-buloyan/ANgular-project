import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Router Tutorial';
  constructor(private router: Router) {}
  public routTo() {
    this.router.navigateByUrl('home-component');
    // some commit 
  }
}