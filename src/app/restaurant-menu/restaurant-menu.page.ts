import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-restaurant-menu',
  templateUrl: 'restaurant-menu.page.html',
  styleUrls: ['restaurant-menu.page.scss']
})
export class RestaurantMenuPage implements OnInit {
  restaurantMenus$: Observable<any>;
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantMenus$ = this.restaurantService.getMenus();
  }
}
