import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {ApiService} from './api.service';
import {NativeAudio} from '@ionic-native/native-audio/ngx';
import {PlaylistPageModule} from './playlist/playlist.module';
import {MorePageModule} from './more/more.module';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import {AlbumInfoPageModule} from './album-info/album-info.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        SharedModule,
        PlaylistPageModule,
        MorePageModule,
        AlbumInfoPageModule,
        HttpClientModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        ApiService,
        NativeAudio,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
