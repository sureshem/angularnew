import { Component, OnInit } from '@angular/core';
import {Title,Meta} from '@angular/platform-browser'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private title:Title,private meta:Meta) { }

  ngOnInit(): void {
  this.title.setTitle('Portfolio')
  }

}
