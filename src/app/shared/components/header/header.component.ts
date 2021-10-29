import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentDate: Date = new Date(Date.now())

  constructor() {
  }

  get currentDay() {
    return this.currentDate.getDay()
  }

  get currentMonthDay() {
    return this.currentDate.getDate()
  }

  get currentYear() {
    return this.currentDate.getFullYear()
  }

  get currentMonth() {
    return this.currentDate.getMonth()
  }


  ngOnInit(): void {
  }

}
