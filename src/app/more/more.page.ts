import {Component, Input} from '@angular/core';
import {ApiService} from '../api.service';
import {ISong} from '../player/player-page.component';
import {ModalController} from '@ionic/angular';
import {AlbumInfoPage} from '../album-info/album-info.page';

@Component({
    selector: 'app-more',
    templateUrl: './more.page.html',
    styleUrls: ['./more.page.scss'],
})
export class MorePage {

    @Input() activeSong: ISong;

    constructor(
        private playlistService: ApiService,
        private modalController: ModalController) {
        this.activeSong = this.playlistService.songsList[0];
    }

    backToMainPage() {
        this.modalController.dismiss();
    }

    async showAlbumPage(albumName: string) {
        const modal = await this.modalController.create({
            component: AlbumInfoPage,
            componentProps: {
                albumName
            },
            id: 'PlaylistPage',
        });
        return await modal.present();
    }
}
