import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent implements OnInit {
  @Input() restaurant;

  constructor() { }

  ngOnInit() {}

  increaseLikes(restaurant) {
    restaurant.likes++;
  }
  onRateChange(e) {
    console.log(e);
  }

  viewDetailsPage() {
  }
  
}
