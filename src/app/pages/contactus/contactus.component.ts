import { Component, OnInit } from '@angular/core';
import {Title,Meta} from '@angular/platform-browser'

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private title:Title,private meta:Meta) { }

  ngOnInit(): void {
  this.title.setTitle('Contact us')
  }

}
