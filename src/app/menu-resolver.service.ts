import { RestaurantService } from './restaurant.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuResolver implements Resolve<any> {

  constructor(private restaurantService: RestaurantService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.restaurantService.getMenu(+route.paramMap.get('id'));
  }
}
