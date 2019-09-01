import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantResolver } from './restaurant-resolver.service';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule] ,
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    RestaurantResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
