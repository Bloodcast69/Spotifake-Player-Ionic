import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {Router} from '@angular/router';
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

    coverImages: ICoverImage[] = [
        {albumName: 'Unreleased1', albumArtist: 'Kanye West', coverSrc: 'assets/cover_1.png'},
        {albumName: 'Unreleased', albumArtist: 'Kanye West', coverSrc: 'assets/cover_2.png'},
        {albumName: 'Unreleased3', albumArtist: 'Kanye West', coverSrc: 'assets/cover_3.png'},
    ];

    activeSlideImage: ICoverImage = this.coverImages[0];

    constructor(private router: Router, private renderer: Renderer2) {

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
        this.renderer.setStyle(this.albumInfoOverlay.nativeElement, 'transition', 'all 400ms');
        this.renderer.setStyle(this.albumInfoOverlay.nativeElement, 'transform', 'translateY(0%)');
    }

    backToMainPage() {
        this.renderer.setStyle(this.albumInfoOverlay.nativeElement, 'transition', 'all 400ms');
        this.renderer.setStyle(this.albumInfoOverlay.nativeElement, 'transform', 'translateY(120%)');
    }

    onSlideChange() {
        this.slides.getActiveIndex().then((slideIndex: any) => {
            this.activeSlideImage = this.coverImages[slideIndex];
        });
    }

}
