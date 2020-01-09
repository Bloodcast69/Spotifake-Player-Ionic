import {NgModule} from '@angular/core';

import {NextSongComponent} from './next-song/next-song.component';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {TesttComponent} from '../testt/testt.component';
import {PlaylistItemComponent} from './playlist-item/playlist-item.component';

@NgModule({
    imports: [CommonModule, IonicModule],
    exports: [NextSongComponent, TesttComponent, PlaylistItemComponent],
    declarations: [NextSongComponent, TesttComponent, PlaylistItemComponent],
    providers: [],
})
export class SharedModule {
}
