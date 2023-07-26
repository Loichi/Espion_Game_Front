// gaming-card.module.ts
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamingCardComponent } from './gaming-card.component';

@NgModule({
  declarations: [GamingCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [GamingCardComponent], // Export the component here
})
export class GamingCardModule {}
