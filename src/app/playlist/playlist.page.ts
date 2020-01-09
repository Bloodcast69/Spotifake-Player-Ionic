import {Component, OnInit} from '@angular/core';
import {ISong} from '../home/home.page';
import {PlaylistService} from '../playlist.service';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.page.html',
    styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {
    activeSlideImage: ISong = {
        albumName: 'Test Album 1',
        albumArtist: 'Test Artist 1',
        coverSrc: 'assets/cover_1.png',
        songName: 'Test Song 1',
        songAddress: 'assets/song1.mp3'
    };

    playlistSongs: ISong[];

    constructor(private playlistService: PlaylistService, private modalController: ModalController) {
        this.playlistSongs = this.playlistService.songsList;
    }

    ngOnInit() {
    }

    closePlaylist() {
        this.modalController.dismiss({dismissed: true});
    }

    playSong(song: ISong) {
        this.modalController.dismiss({dismissed: true, song});
    }
}
