import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Observable } from 'rxjs';
import { DomController } from '@ionic/angular';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: 'restaurant-menu.page.html',
  styleUrls: ['restaurant-menu.page.scss']
})
export class RestaurantMenuPage implements OnInit {
  restaurantMenus$: Observable<any>;
  constructor(private restaurantService: RestaurantService, private domCtrl: DomController) { }

  ngOnInit(): void {
    this.restaurantMenus$ = this.restaurantService.getMenus();
  }

  ionViewWillEnter() {
    this.updateBackground();
  }

  updateBackground() {
    const content = document.querySelector('.menus-page');
    const innerScroll = content.shadowRoot.querySelector('.inner-scroll');

    this.domCtrl.write(() => {
      (innerScroll as any).style.background = "url('./../../assets/login-wallpaper.jpg') no-repeat center center / cover";
    });
  }
}
