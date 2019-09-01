import { FormsModule } from '@angular/forms';
import { DetailsCardComponent } from '../details-card/details-card.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicRatingModule } from 'ionic4-rating';
import { TruncateModule } from '@yellowspot/ng-truncate';
import { SlideHeaderModule } from './slide-header/slide-header.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        IonicRatingModule,
        TruncateModule,
        SlideHeaderModule
    ],
    declarations: [
        DetailsCardComponent
    ],
    exports: [
        DetailsCardComponent
    ]
})
export class DetailsCardModule {}