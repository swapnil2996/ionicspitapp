import { Component } from '@angular/core';
import { Router, Navigation, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public route: Router) {}

  aboutpage() {
    this.route.navigate(['../about']);
  }

  instvaluepage() {
    this.route.navigate(['../value']);
  }
  visionpage() {
    this.route.navigate(['../vision']);
  }


}
