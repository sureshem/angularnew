import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTpComponent } from './scroll-tp.component';

describe('ScrollTpComponent', () => {
  let component: ScrollTpComponent;
  let fixture: ComponentFixture<ScrollTpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollTpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollTpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
