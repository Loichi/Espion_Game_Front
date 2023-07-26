// game-area.module.ts
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GamingCardModule } from '../gaming-card/gaming-card.module';
import { TimerModule } from '../timer/timer.module';

import { GameAreaComponent } from './game-area.component';
import { GameAreaService } from './game-area.service';

@NgModule({
  declarations: [GameAreaComponent],
  imports: [CommonModule, IonicModule, FormsModule, GamingCardModule, TimerModule], // Import the modules here
  exports: [GameAreaComponent],
  providers: [GameAreaService],
})
export class GameAreaModule {}
