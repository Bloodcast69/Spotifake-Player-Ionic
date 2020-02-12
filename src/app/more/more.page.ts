import {Component, Input} from '@angular/core';
import {PlaylistService} from '../playlist.service';
import {ISong} from '../player/player-page.component';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-more',
    templateUrl: './more.page.html',
    styleUrls: ['./more.page.scss'],
})
export class MorePage {

    @Input() activeSong: ISong;

    constructor(
        private playlistService: PlaylistService,
        private modalController: ModalController) {
        this.activeSong = this.playlistService.songsList[0];
    }

    backToMainPage() {
        this.modalController.dismiss();
    }
}
