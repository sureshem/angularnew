import { Component, OnInit } from '@angular/core';
import {Title,Meta} from '@angular/platform-browser'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private title:Title,private meta:Meta) { }

  ngOnInit(): void {
  this.title.setTitle('Teams')
  }

}
