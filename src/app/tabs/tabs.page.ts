import { ActivatedRoute, Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild('tabs', {static: false}) tabs: IonTabs;
  currentTab: any;

  constructor(private barcodeScanner: BarcodeScanner, private route: Router) {}

  getSelectedTab() {
    this.currentTab = this.tabs.getSelected();
  }

  performScan() {
    this.barcodeScanner.scan().then((barcodeData:any) => {
      Toast.show({
        duration: 'long',
        text: JSON.stringify(barcodeData)
      });
      console.log('Barcode data', barcodeData);
      this.route.navigate(['/details/' + JSON.parse(barcodeData.text).id]);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
