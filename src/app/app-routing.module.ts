import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'player', pathMatch: 'full' },
  { path: 'player', loadChildren: './player/player.module#PlayerPageModule', canActivate: [AuthGuard] },
  { path: 'playlist', loadChildren: './playlist/playlist.module#PlaylistPageModule', canActivate: [AuthGuard] },
  { path: 'more', loadChildren: './more/more.module#MorePageModule', canActivate: [AuthGuard] },
  { path: 'main', loadChildren: './main/main.module#MainPageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'album-info', loadChildren: './album-info/album-info.module#AlbumInfoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
