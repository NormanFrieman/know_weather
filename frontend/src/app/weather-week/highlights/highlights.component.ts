import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {

  @Input() uvIndex: number;
  
  @Input() windSpeed: number;
  
  @Input() humidity: number;
  
  @Input() visibility: number;

  constructor() { }

  ngOnInit(): void {
  }

}
