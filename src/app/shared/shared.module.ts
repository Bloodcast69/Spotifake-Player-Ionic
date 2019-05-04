import {NgModule} from '@angular/core';

import {NextSongComponent} from './next-song/next-song.component';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {TesttComponent} from '../testt/testt.component';

@NgModule({
    imports: [CommonModule, IonicModule],
    exports: [NextSongComponent, TesttComponent],
    declarations: [NextSongComponent, TesttComponent],
    providers: [],
})
export class SharedModule {
}
