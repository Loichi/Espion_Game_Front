// timer.module.ts
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';

@NgModule({
  declarations: [TimerComponent],
  imports: [CommonModule, IonicModule],
  exports: [TimerComponent], // Export the component here
})
export class TimerModule {}
