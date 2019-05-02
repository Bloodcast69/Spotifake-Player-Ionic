import {NgModule} from '@angular/core';

import {NextSongComponent} from './next-song/next-song.component';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

@NgModule({
    imports: [CommonModule, IonicModule],
    exports: [NextSongComponent],
    declarations: [NextSongComponent],
    providers: [],
})
export class SharedModule {
}
