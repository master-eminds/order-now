import { RestaurantService } from '../services/restaurant.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestaurantResolver implements Resolve<any> {

  constructor(private restaurantService: RestaurantService) { }

  resolve(route: ActivatedRouteSnapshot) {
    console.log('RestaurantResolver');
    return this.restaurantService.getRestaurant(+route.paramMap.get('id'));
  }
}
