import { Component } from '@angular/core';
import { Router, Navigation, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl:'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public route: Router) {}

  nextpage() {
    this.route.navigate(['/timetable']);
  }
  attendpage() {
    this.route.navigate(['/attendance']);
  }
}


