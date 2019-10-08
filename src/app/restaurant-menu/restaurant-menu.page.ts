import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-restaurant-menu',
  templateUrl: 'restaurant-menu.page.html',
  styleUrls: ['restaurant-menu.page.scss']
})
export class RestaurantMenuPage implements OnInit {
  restaurantMenus = [{
    id: 0,
    name: 'Daily',
    image: './../../assets/menus/menu1.jpg'
  },
  {
    id: 1,
    name: 'Italian',
    image: './../../assets/menus/menu2.jpg'
  },
  {
    id: 2,
    name: 'Asian',
    image: './../../assets/menus/menu3.jpg'
  },
  {
    id: 3,
    name: 'Vegan',
    image: './../../assets/menus/menu4.jpg'
  },
  {
    id: 4,
    name: 'Meat',
    image: './../../assets/menus/menu5.jpg'
  },
  {
    id: 5,
    name: 'Vegetarian',
    image: './../../assets/menus/menu6.jpg'
  },
  {
    id: 6,
    name: 'Breakfast',
    image: './../../assets/menus/menu7.jpg'
  },
  {
    id: 7,
    name: 'Drinks',
    image: './../../assets/menus/menu8.jpg'
  },
  {
    id: 8,
    name: 'Sweets',
    image: './../../assets/menus/menu9.jpg'
  }];
  constructor() { }

  ngOnInit(): void {
  }
}
