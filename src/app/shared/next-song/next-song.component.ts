import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ISong} from '../../player/player-page.component';
import {PlaylistPage} from '../../playlist/playlist.page';
import {ModalController} from '@ionic/angular';
import {getSongTime} from '../getSongTime';

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
            if (data.song) {
                this.playSongFromPlaylist.emit(data.song);
            }
        });
        return await modal.present();
    }

    playSong(nextSong: ISong) {
        this.playNextSong.emit(nextSong);
    }

    getSongTime(time: number) {
        return `${getSongTime(time).minutes}:${Math.floor(Number(getSongTime(time).seconds))}` || '00:00';
    }
}
