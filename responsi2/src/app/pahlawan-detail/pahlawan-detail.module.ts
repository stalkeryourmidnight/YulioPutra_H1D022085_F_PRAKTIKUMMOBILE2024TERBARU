import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookDetailPageRoutingModule } from './pahlawan-detail-routing.module';

import { BookDetailPage } from './pahlawan-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookDetailPageRoutingModule
  ],
  declarations: [BookDetailPage]
})
export class BookDetailPageModule {}
