import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SlideHeaderComponent } from './slide-header.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        SlideHeaderComponent
    ],
    exports: [
        SlideHeaderComponent
    ]
})
export class SlideHeaderModule {}
