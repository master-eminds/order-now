import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private barcodeScanner: BarcodeScanner) { }

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
