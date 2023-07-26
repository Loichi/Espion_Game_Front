import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewLobbyPageRoutingModule } from './new-lobby-routing.module';

import { NewLobbyPage } from './new-lobby.page';
import { JoueurController } from 'src/app/controllers/joueur.controller';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewLobbyPageRoutingModule
  ],
  declarations: [NewLobbyPage],
  providers:[JoueurController]
  
})
export class NewLobbyPageModule {}
