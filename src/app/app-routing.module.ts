import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'leave',
    loadChildren: () => import('./views/leave/leave.module').then( m => m.LeavePageModule)
  },
  {
    path: 'new-lobby',
    loadChildren: () => import('./views/new-lobby/new-lobby.module').then( m => m.NewLobbyPageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./views/game/game.module').then( m => m.GamePageModule)
  },
  {
    path: 'end-game',
    loadChildren: () => import('./views/end-game/end-game.module').then( m => m.EndGamePageModule)
  },
  {
    path: 'rules',
    loadChildren: () => import('./views/rules/rules.module').then( m => m.RulesPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
