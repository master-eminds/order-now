import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DomController } from '@ionic/angular';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: 'restaurant-menu.page.html',
  styleUrls: ['restaurant-menu.page.scss']
})
export class RestaurantMenuPage implements OnInit {
  restaurantMenus$: Observable<any>;
  constructor(private apiService: ApiService, private domCtrl: DomController) { }

  ngOnInit(): void {
    this.restaurantMenus$ = this.apiService.getMenus();
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
