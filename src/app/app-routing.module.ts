import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SidenavContainerComponent} from './sidenav-container/sidenav-container.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {
    path: '', component: SidenavContainerComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'library', loadChildren: () => import('./library/library.module').then(m => m.LibraryModule), canLoad: [AuthGuard]},
      { path: 'artist', loadChildren: () => import('./artist/artist.module').then(m => m.ArtistModule) },
      { path: 'album', loadChildren: () => import('./album/album.module').then(m => m.AlbumModule) },
      { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
      { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) }
    ]
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    urlUpdateStrategy: 'eager'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
