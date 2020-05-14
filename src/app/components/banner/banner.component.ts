import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
slides = [
  {img:"./assets/images/sliderImg/banner-1a.jpg"},
  {img:"./assets/images/sliderImg/banner-1b.jpg"},
  {img:"./assets/images/sliderImg/banner-1a.jpg"},
  {img:"./assets/images/sliderImg/banner-1b.jpg"}
]
slideConfig = {
  infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000 
};

  constructor() { }

  ngOnInit(): void {
  }

}
