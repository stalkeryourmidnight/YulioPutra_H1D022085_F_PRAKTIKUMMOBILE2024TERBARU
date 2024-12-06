import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBookPageRoutingModule } from './add-pahlawan-routing.module';

import { AddBookPage } from './add-pahlawan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBookPageRoutingModule
  ],
  declarations: [AddBookPage]
})
export class AddBookPageModule {}
