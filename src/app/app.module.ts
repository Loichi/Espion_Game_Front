import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from  '@angular/common/http';

import { GameAreaService } from './components/game-area/game-area.service';

import { GameAreaModule } from './components/game-area/gaming-area.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, GameAreaModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GameAreaService 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
