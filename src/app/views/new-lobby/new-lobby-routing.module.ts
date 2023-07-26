import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewLobbyPage } from './new-lobby.page';

const routes: Routes = [
  {
    path: '',
    component: NewLobbyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewLobbyPageRoutingModule {}
