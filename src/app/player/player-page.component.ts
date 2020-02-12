import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {IonSlides, ModalController} from '@ionic/angular';
import {PlaylistService} from '../playlist.service';
import {getSongTime} from '../shared/getSongTime';
import {MorePage} from '../more/more.page';
import {Router} from '@angular/router';

export interface ISong {
    albumName: string;
    albumArtist: string;
    coverSrc: string;
    songName: string;
    songAddress: string;
}

@Component({
    selector: 'app-player',
    templateUrl: 'player-page.component.html',
    styleUrls: ['player-page.component.scss'],
})
export class PlayerPage implements AfterViewInit {
    @ViewChild('albumCovers') albumCovers: any;
    @ViewChild(IonSlides) slides: IonSlides;
    @ViewChild('albumInfoOverlay') albumInfoOverlay: ElementRef;

    audio = new Audio('assets/song1.mp3');
    currentAudioTime = 0;
    isSongPlaying = false;


    options = {
        initialSlide: 1
    };

    songsList: ISong[];
    activeSong: ISong;
    nextSong: ISong;

    constructor(
        private playlistService: PlaylistService,
        private modalController: ModalController,
        private router: Router) {


        this.playlistService.songsLoaded().subscribe(() => {
            this.songsList = this.playlistService.songsList;
            this.activeSong = this.songsList[0];
            this.playlistService.currentPlayedSong = this.songsList[0];
            this.nextSong = this.playlistService.getNextSong(this.activeSong);
        });

        this.playlistService.songsListChange().subscribe((songs: any) => {
            this.songsList = songs;
        });

        this.audio.addEventListener('timeupdate', () => {
            this.currentAudioTime = Math.floor(this.audio.currentTime);
            this.getSongTime(this.currentAudioTime);
        });


    }

    ngAfterViewInit(): void {
        this.playlistService.currentPlayedSongChange().subscribe(() => {
            setTimeout(() => {
                this.activeSong = this.playlistService.currentPlayedSong;
                this.nextSong = this.playlistService.getNextSong(this.activeSong);
                this.slides.slideTo(this.playlistService.getSongIndex(this.activeSong));
            }, 0);
        });
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

    async loadMoreAlbumInfo() {
        const modal = await this.modalController.create({
            component: MorePage,
            componentProps: {
                activeSong: this.activeSong
            }
        });
        return await modal.present();
    }

    onSlideChange() {
        this.slides.getActiveIndex().then((slideIndex: any) => {
            this.activeSong = this.songsList[slideIndex];
            this.nextSong = this.playlistService.getNextSong(this.activeSong);
            this.playlistService.currentPlayedSong = this.activeSong;
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

    playNextSong() {
        this.changeSong('next');
    }

    playSongFromPlaylist(event: ISong) {
        this.audio = new Audio(event.songAddress);
        this.slides.slideTo(this.songsList.findIndex((song: ISong) => song === event));
    }

    backToMainPage() {
        this.router.navigate(['main']);
    }
}
