import { Component, OnInit } from '@angular/core';
import { Router, Navigation, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss'],
})
export class TimetablePage implements OnInit {

  constructor(public route: Router) { }

  mondaypage() {
    this.route.navigate(['/monday']);
  }

  ngOnInit() {
  }

}
