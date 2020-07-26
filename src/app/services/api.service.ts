import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getRestaurants() {
    return this.httpClient.get("api/restaurants");
  }

  getRestaurant(id) {
    return this.httpClient.get(`api/restaurants/${id}`);
  }

  getMenus() {
    return this.httpClient.get("api/menus");
  }

  getMenu(id) {
    return this.httpClient.get(`api/menus/${id}`);
  }

  getOrderList() {
    return this.httpClient.get('api/orders');
  }
}
