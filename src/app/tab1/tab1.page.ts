import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Plugins } from '@capacitor/core';
import { RestaurantService } from '../restaurant.service';
import { Observable } from 'rxjs';
const { Toast } = Plugins;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  restaurants$: Observable<any>;
  constructor(private barcodeScanner: BarcodeScanner, private restaurantService: RestaurantService) {
   }

   ngOnInit() {
     this.restaurants$ = this.restaurantService.getRestaurants();
   }

  performScan() {
    this.barcodeScanner.scan().then(barcodeData => {
      Toast.show({
        duration: 'long',
        text: JSON.stringify(barcodeData)
      });
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
