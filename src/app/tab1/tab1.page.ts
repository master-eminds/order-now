import { Component, ViewEncapsulation } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  rate = 2;
  constructor(private barcodeScanner: BarcodeScanner) {
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

  increaseLikes(restaurant) {
    restaurant.likes++;
  }
  onRateChange(e) {
    console.log(e);
  }

  viewDetailsPage() {
  }

  restaurants = [{
    image: '/assets/image1.jpeg',
    name: 'Yraqi',
    subtitle: '9 Ridiculously Good Lebanese Foods You Need to Try',
    rate: 2,
    likes: 3,
    description: `Fast food restaurants are traditionally distinguished by their
     ability to serve food via a drive-through. Outlets may be stands or kiosks,
      which may provide no shelter or seating,[2] or fast food restaurants 
    (also known as quick service restaurants).[citation needed] Franchise operations 
    that are part of restaurant chains have standardized foodstuffs shipped to each restaurant from central locations.[3]`
  },
  {
    image: '/assets/image2.jpg',
    name: 'Trattoria Roz Cafe',
    rate: 3,
    subtitle: 'Gusta preparate speciale italienesti',
    likes: 20,
    description: `In cadrul Trattoriei Roz Cafe beneficiezi de servcii de calitate 
    si iti petreci timpul alaturi de oameni ce aduc cu ei povesti si ganduri, 
    oferind dinamism şi energie intregului local. Trattoria Roz Cafe creeaza o
     lume in care arta, pasiunea si talentul isi dau intalnire doar pentru tine.
     Ambientul placut si linistitor te vor face sa te scufunzi in timp literalmente. 
     Va asteptam cu drag la Trattoria Roz Cafe!`
  },
  {
    image: '/assets/image3.jpg',
    name: 'Aqua Herastrau',
    subtitle: 'Relax enjoying special food',
    rate: 4,
    likes: 18,
    description: `AQUA embodies and urbane sophistication serving
     simple yet accomplished dishes of Mediterranean cuisine. 
     With its luxurious setting, flawless services, fashionable
    crowd and cool vibe this is clearly the place to be in Bucharest`
  },
  {
    image: '/assets/image4.jpg',
    name: 'Funky Lounge',
    subtitle: 'Urban kitcken with light summer meals',
    rate: 5,
    likes: 3,
    description: `It’s the second venue belonging to Funky Lounge chain
    . A summer terrace that catches the attention by being positioned 
    on the shore of Herastrau Lake and by the impressive sunsets that 
    can be admired from there`
  },
  {
    image: '/assets/image5.jpg',
    name: 'Cornul Vanatorului',
    subtitle: 'Relax while eating in the nature',
    rate: 4,
    likes: 35,
    description: `Complexul Turistic Cornul Vanatorului vine in ajutorul vostru pentru evenimentele speciale din viata,
     cu meniuri pregatite cu grija, sali moderne si armonioase si multe surprize pe care va invitam sa le descoperiti`
  }];

}
