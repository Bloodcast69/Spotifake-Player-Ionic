import {Component, OnInit} from '@angular/core';
import {ISong} from '../player/player-page.component';
import {ApiService} from '../api.service';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.page.html',
    styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {
    activeSlideImage: ISong;

    playlistSongs: ISong[];

    constructor(private playlistService: ApiService, private modalController: ModalController) {
        this.playlistService.loadSongs();
    }

    ngOnInit() {
        console.log('playlist');
        this.playlistService.songsLoaded().subscribe((playlist: ISong[]) => {
            this.playlistSongs = playlist;
            this.activeSlideImage = playlist[0];
        });
    }

    closePlaylist() {
        this.modalController.dismiss({dismissed: true});
    }

    playSong(song: ISong) {
        this.modalController.dismiss({dismissed: true, song});
    }
}
