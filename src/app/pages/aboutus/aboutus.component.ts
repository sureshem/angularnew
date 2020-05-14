import { Component, OnInit } from '@angular/core';
import {Title,Meta} from '@angular/platform-browser'

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private title:Title,private meta:Meta) { }

  ngOnInit(): void {
  this.title.setTitle('About us')
  }

}
