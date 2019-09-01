import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  restaurants$: Observable<any>;
  constructor(private restaurantService: RestaurantService) {
   }

   ngOnInit() {
     this.restaurants$ = this.restaurantService.getRestaurants();
   }
}
