import { FormsModule } from '@angular/forms';
import { DetailsCardComponent } from '../details-card/details-card.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicRatingModule } from 'ionic4-rating';
import { TruncateModule } from '@yellowspot/ng-truncate';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        IonicRatingModule,
        TruncateModule
    ],
    declarations: [
        DetailsCardComponent
    ],
    exports: [
        DetailsCardComponent
    ]
})
export class DetailsCardModule {}