import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-header',
  templateUrl: './slide-header.component.html',
  styleUrls: ['./slide-header.component.scss'],
})
export class SlideHeaderComponent implements OnInit {
  @Input() slides;
  slideOpts: any = {
    autoplay : {
      delay: 2000,
    },
    coverflowEffect: {
      stretch: 100
    },
    autoHeight: true,
    effect: 'cube'
  };
  constructor() { }

  ngOnInit() {
  }

}
