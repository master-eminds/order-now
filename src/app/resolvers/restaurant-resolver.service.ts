import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestaurantResolver implements Resolve<any> {

  constructor(private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getRestaurant(+route.paramMap.get('id'));
  }
}
