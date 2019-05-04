import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {Router} from '@angular/router';
import {PlaylistService} from '../playlist.service';

export interface ICoverImage {
    albumName: string;
    albumArtist: string;
    coverSrc: string;
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

    isPlayedSong = false;
    options = {
        initialSlide: 1
    };

    // coverImages: ICoverImage[] = [
    //     {albumName: 'Unreleased1', albumArtist: 'Kanye West', coverSrc: 'assets/cover_1.png'},
    //     {albumName: 'Unreleased', albumArtist: 'Kanye West', coverSrc: 'assets/cover_2.png'},
    //     {albumName: 'Unreleased3', albumArtist: 'Kanye West', coverSrc: 'assets/cover_3.png'},
    // ];

    coverImages: ICoverImage[] = this.playlistService.songsList;

    activeSlideImage: ICoverImage = this.coverImages[0];

    constructor(
        private router: Router,
        private renderer: Renderer2,
        private playlistService: PlaylistService) {

        this.playlistService.currentPlayedAlbum = this.coverImages[0];

        this.playlistService.songsListChange().subscribe((songs: any) => {
            this.coverImages = songs;
        });

    }


    playSong(event: any) {
        this.isPlayedSong = !this.isPlayedSong;
        if (this.isPlayedSong) {
            event.target.attributes.src.value = 'assets/Play_inactive.png';
        } else {
            event.target.attributes.src.value = 'assets/Play_active.png';

        }
    }


    loadMoreAlbumInfo() {
        this.router.navigate(['more']);
    }

    onSlideChange() {
        this.slides.getActiveIndex().then((slideIndex: any) => {
            this.activeSlideImage = this.coverImages[slideIndex];
            this.playlistService.currentPlayedAlbum = this.activeSlideImage;
        });
    }

}
