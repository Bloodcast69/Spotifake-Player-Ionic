import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ISong} from '../../home/home.page';
import {PlaylistPage} from '../../playlist/playlist.page';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-next-song',
    templateUrl: './next-song.component.html',
    styleUrls: ['./next-song.component.scss'],
})
export class NextSongComponent implements OnInit {
    @Input() nextSong: ISong;
    @Output() playNextSong: EventEmitter<ISong> = new EventEmitter<ISong>();
    @Output() playSongFromPlaylist: EventEmitter<ISong> = new EventEmitter<ISong>();

    nextAudio: HTMLAudioElement;

    constructor(private router: Router, private modalController: ModalController) {
    }

    ngOnInit() {
        if (this.nextSong) {
            this.nextAudio = new Audio(this.nextSong.songAddress);
        }
    }

    async openPlaylist() {
        const modal = await this.modalController.create({
            component: PlaylistPage
        });

        modal.onDidDismiss().then(({data}) => {
            this.playSongFromPlaylist.emit(data.song);
        });
        return await modal.present();
    }

    playSong(nextSong: ISong) {
        this.playNextSong.emit(nextSong);
    }
}
