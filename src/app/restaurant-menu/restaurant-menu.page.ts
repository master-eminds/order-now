import { TestService } from './test.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-restaurant-menu',
  templateUrl: 'restaurant-menu.page.html',
  styleUrls: ['restaurant-menu.page.scss']
})
export class RestaurantMenuPage implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getMenu();
  }
}
