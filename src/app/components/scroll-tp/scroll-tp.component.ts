import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-scroll-tp',
  templateUrl: './scroll-tp.component.html',
  styleUrls: ['./scroll-tp.component.css']
})
export class ScrollTpComponent {
faArrowAltCircleUp = faArrowAltCircleUp
 constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 ||     
    document.documentElement.scrollTop > 20) {
      document.getElementById('subTitle').classList.add('scrollTopOpen');
    }else {
    document.getElementById('subTitle').classList.remove('scrollTopOpen');
    }
  }

  onScrollTp(){
	  window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
	}

}
