import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TopBarComponent} from './top-bar/top-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '@environment/environment';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {HomeComponent} from './home/home.component';
import {HomeGridComponent} from './home-grid/home-grid.component';
import {HomeGridItemComponent} from './home-grid-item/home-grid-item.component';
import {PlayerComponent} from './player/player.component';
import {SidenavContainerComponent} from './sidenav-container/sidenav-container.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {SearchFormComponent} from './search-form/search-form.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {AvatarPopupComponent} from './avatar-popup/avatar-popup.component';
import {BlockScrollStrategy, Overlay, OverlayModule} from '@angular/cdk/overlay';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {BottomBarComponent} from './bottom-bar/bottom-bar.component';
import {MatRippleModule} from '@angular/material/core';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';
import {CreatePlaylistDialogComponent} from './create-playlist-dialog/create-playlist-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MAT_MENU_SCROLL_STRATEGY, MatMenuModule} from '@angular/material/menu';
import {CurrentTimePipe} from '@shared/pipes/current-time.pipe';
import {DurationPipe} from '@shared/pipes/duration.pipe';
import {SharedModule} from '@shared/shared.module';
import {PlayArrowIconComponent} from './player/play-arrow-icon/play-arrow-icon.component';
import {IconModule} from './icon/icon.module';

function scrollFactory(overlay: Overlay): () => BlockScrollStrategy {
  return () => overlay.scrollStrategies.block();
}

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    HomeGridComponent,
    HomeGridItemComponent,
    PlayerComponent,
    SidenavContainerComponent,
    SearchFormComponent,
    AvatarPopupComponent,
    BottomBarComponent,
    CreatePlaylistDialogComponent,
    CurrentTimePipe,
    DurationPipe,
    PlayArrowIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSliderModule,
    MatListModule,
    MatChipsModule,
    MatInputModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    MatSlideToggleModule,
    MatRippleModule,
    SharedModule,
    IconModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 4000}},
    {provide: MAT_MENU_SCROLL_STRATEGY, useFactory: scrollFactory, deps: [Overlay]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
