import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePageRoutingModule } from './game-routing.module';

import { GamePage } from './game.page';

import { GameAreaModule } from 'src/app/components/game-area/gaming-area.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePageRoutingModule,
    GameAreaModule
  ],
  declarations: [GamePage]
})
export class GamePageModule {}
