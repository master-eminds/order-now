import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './../../services';
import { Observable } from 'rxjs';
import { DomController } from '@ionic/angular';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: 'restaurants-list.page.html',
  styleUrls: ['restaurants-list.page.scss']
})
export class RestaurantsListPage implements OnInit {
  restaurants$: Observable<any>;
  constructor(private restaurantService: RestaurantService, private domCtrl: DomController) {
   }

   ngOnInit() {
     this.restaurants$ = this.restaurantService.getRestaurants();
   }

   ionViewWillEnter() {
    this.updateBackground();
  }

  updateBackground() {
    const content = document.querySelector('.restaurants-list-page');
    const innerScroll = content.shadowRoot.querySelector('.inner-scroll');

    this.domCtrl.write(() => {
      (innerScroll as any).style.background = "url('./../../assets/login-wallpaper.jpg') no-repeat center center / cover";
    });
  }
}
