import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Keyboard } from '@ionic-native/keyboard';
import { OnInit } from '@angular/core';
import { AuthService } from './../../services';
import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  @ViewChild('tabs', { static: false }) tabs: IonTabs;
  @ViewChild('scanBtn', { static: false }) scanBtn: any;
  currentTab: any;

  constructor(
    private barcodeScanner: BarcodeScanner,
    public authService: AuthService,
    private router: Router
  ) {
    Keyboard.onKeyboardWillHide().subscribe(() => {
      this.scanBtn.el.style.visibility = 'visible';
    });
    Keyboard.onKeyboardDidShow().subscribe(() => {
      this.scanBtn.el.style.visibility = 'hidden';
    });
  }

  ngOnInit() {}

  getSelectedTab() {
    this.currentTab = this.tabs.getSelected();
  }

  performScan() {
    this.barcodeScanner.scan().then(barcodeData => {
      alert(JSON.stringify(barcodeData));
      this.router.navigate(['/details/' + JSON.parse(barcodeData.text).id]);
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
