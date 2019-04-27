import {Component, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    @ViewChild('albumCovers') albumCovers: any;
    @ViewChild(IonSlides) slides: IonSlides;

    isPlayedSong = false;

    options = {
        initialSlide: 1
    };


    playSong(event: any) {
        this.isPlayedSong = !this.isPlayedSong;
        if (this.isPlayedSong) {
            event.target.attributes.src.value = 'assets/Play_inactive.png';
        } else {
            event.target.attributes.src.value = 'assets/Play_active.png';

        }
    }

}
