import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ISong} from '../../home/home.page';
import {getSongTime} from '../getSongTime';

@Component({
    selector: 'playlist-item',
    templateUrl: 'playlist-item.component.html',
    styleUrls: ['playlist-item.component.scss']
})

export class PlaylistItemComponent implements OnInit, AfterViewInit {
    @Input() song: ISong;
    @Input() iterator: number;

    audio: HTMLAudioElement;
    songDuration = '00:00';
    constructor() {
    }

    ngOnInit() {
        this.audio = new Audio(this.song.songAddress);
        this.audio.addEventListener('loadedmetadata', () => {
            const songTime = {...getSongTime(this.audio.duration)};
            this.songDuration = `${songTime.minutes}:${Math.floor(Number(songTime.seconds))}`
        });
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.audio = null;
        }, 1000);
    }
}
