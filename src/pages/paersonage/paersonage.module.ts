import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaersonagePage } from './paersonage';

@NgModule({
  declarations: [
    PaersonagePage,
  ],
  imports: [
    IonicPageModule.forChild(PaersonagePage),
  ],
})
export class PaersonagePageModule {}
