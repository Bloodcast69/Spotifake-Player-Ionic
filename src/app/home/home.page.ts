import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {IonSlides, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {PlaylistService} from '../playlist.service';
import {getSongTime} from '../shared/getSongTime';
import {PlaylistPage} from '../playlist/playlist.page';

export interface ISong {
    albumName: string;
    albumArtist: string;
    coverSrc: string;
    songName: string;
    songAddress: string;
}

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    @ViewChild('albumCovers') albumCovers: any;
    @ViewChild(IonSlides) slides: IonSlides;
    @ViewChild('albumInfoOverlay') albumInfoOverlay: ElementRef;

    audio = new Audio('assets/song1.mp3');
    currentAudioTime = 0;
    isSongPlaying = false;


    options = {
        initialSlide: 1
    };

    songsList: ISong[] = this.playlistService.songsList;
    activeSong: ISong = this.songsList[0];
    nextSong: ISong;

    constructor(
        private router: Router,
        private renderer: Renderer2,
        private playlistService: PlaylistService,
        private modalController: ModalController) {

        this.playlistService.currentPlayedAlbum = this.songsList[0];

        this.playlistService.songsListChange().subscribe((songs: any) => {
            this.songsList = songs;
        });

        this.audio.addEventListener('timeupdate', () => {
            this.currentAudioTime = Math.floor(this.audio.currentTime);
            this.getSongTime(this.currentAudioTime);
        });

        this.nextSong = this.playlistService.getNextSong(this.activeSong);
        console.log(this.activeSong);
        console.log(this.nextSong);
    }

    playSong() {
        this.isSongPlaying = !this.isSongPlaying;

        if (this.isSongPlaying) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }

    getSongTime(time: number): { minutes: string | number, seconds: string | number, fullTime: string } {
        return getSongTime(time);
    }

    slideAudioDuration(event: any) {
        this.currentAudioTime = event.detail.value;
    }

    loadMoreAlbumInfo() {
        this.router.navigate(['more']);
    }

    onSlideChange() {
        this.slides.getActiveIndex().then((slideIndex: any) => {
            this.activeSong = this.songsList[slideIndex];
            this.nextSong = this.playlistService.getNextSong(this.activeSong);
            this.playlistService.currentPlayedAlbum = this.activeSong;
        });
    }

    slideDragEnd() {
        this.audio.currentTime = this.currentAudioTime;
    }

    changeSong(direction: string) {
        const isAudioPlaying = !this.audio.paused;

        if (isAudioPlaying) {
            this.stopAudioAndResetCounters();
        }

        if (direction === 'prev') {
            this.slides.slidePrev(200);
        } else if (direction === 'next') {
            this.slides.slideNext(200);
        }
    }

    private stopAudioAndResetCounters(): void {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.currentAudioTime = 0;
        this.isSongPlaying = false;
    }

    playNextSong(event: ISong) {
        this.changeSong('next');
    }

    playSongFromPlaylist(event: ISong) {
        this.audio = new Audio(event.songAddress);
        this.slides.slideTo(this.songsList.findIndex((song: ISong) => song === event));
        // this.changeSong('prev');
        console.log('xxxxx', event);
    }
}
