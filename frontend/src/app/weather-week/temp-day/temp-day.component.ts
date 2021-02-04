import { Component, Input, OnInit } from '@angular/core';

import { Day } from '../../helper/info-day';

@Component({
  selector: 'app-temp-day',
  templateUrl: './temp-day.component.html',
  styleUrls: ['./temp-day.component.css']
})
export class TempDayComponent implements OnInit {

  @Input() day: Day;

  constructor() {}

  ngOnInit(): void {
  }

}
