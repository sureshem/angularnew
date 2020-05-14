import { Component, OnInit } from '@angular/core';
import {Title,Meta} from '@angular/platform-browser'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private title:Title,private meta:Meta) { }

  ngOnInit(): void {
  this.title.setTitle('Services')
  }

}
