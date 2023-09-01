import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LeftSidebarComponent } from './home-page/left-sidebar/left-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RightSiderbarComponent } from './home-page/right-siderbar/right-siderbar.component';
import { WatchlistShowCardComponent } from './home-page/right-siderbar/watchlist-show-card/watchlist-show-card.component';
import { PlatformRowComponent } from './home-page/right-siderbar/platform-row/platform-row.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LeftSidebarComponent,
    RightSiderbarComponent,
    WatchlistShowCardComponent,
    PlatformRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
