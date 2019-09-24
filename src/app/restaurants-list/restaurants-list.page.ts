import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: 'restaurants-list.page.html',
  styleUrls: ['restaurants-list.page.scss']
})
export class RestaurantsListPage implements OnInit {
  restaurants$: Observable<any>;
  constructor(private restaurantService: RestaurantService) {
   }

   ngOnInit() {
     this.restaurants$ = this.restaurantService.getRestaurants();
   }
}
