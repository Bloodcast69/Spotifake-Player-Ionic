import {Component} from '@angular/core';
import {ISong} from '../player/player-page.component';
import {PlaylistService} from '../playlist.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class MainPage {
    filteredSongs$: Observable<ISong[]> | null;

    constructor(private playlistService: PlaylistService, private router: Router) { }

    public searchSong(event: any): void {
        if (!event.detail.value) {
            return;
        }

        this.filteredSongs$ = this.playlistService.searchSongs(event.detail.value);
    }

    public openPlaylist(event: ISong): void {
        this.playlistService.currentPlayedSong = event;
        this.router.navigate(['player']);
    }
}
