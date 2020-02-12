import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ISong} from './player/player-page.component';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PlaylistService {

    public _currentPlayedSong: ISong;
    private currentPlayedSong$: Subject<ISong> = new Subject<ISong>();

    public _songsList: ISong[];
    private songsList$: Subject<any> = new Subject<any>();

    private songsLoaded$: Subject<ISong[]> = new Subject<ISong[]>();

    set currentPlayedSong(song: ISong) {
        this._currentPlayedSong = song;
        this.currentPlayedSong$.next(song);
    }

    get currentPlayedSong() {
        return this._currentPlayedSong;
    }

    public currentPlayedSongChange(): Observable<ISong> {
        return this.currentPlayedSong$;
    }

    set songsList(songsArray: ISong[]) {
        this._songsList = songsArray;
        this.songsList$.next(songsArray);

    }

    get songsList() {
        return this._songsList;
    }

    public songsListChange(): Observable<ISong[]> {
        return this.songsList$;
    }

    public songsLoaded(): Observable<ISong[]> {
        return this.songsLoaded$;
    }

    public getSongIndex(searchSong: ISong): number {
        return this.songsList.findIndex((song) =>
            song.albumArtist === searchSong.albumArtist &&
            song.songName === searchSong.songName);
    }

    public getNextSong(searchSong: ISong): ISong {
        const songsListLength = this.songsList.length;
        const songIndex = this.getSongIndex(searchSong);

        if (songIndex + 1 > songsListLength) {
            return this.songsList[0];
        }
        return this.songsList[songIndex + 1];
    }

    public loadSongs() {
        this.httpClient.get(`${environment.api}/songs`).subscribe((songs: ISong[]) => {
            this.songsList = songs;
            this.songsLoaded$.next(songs);
        });
    }

    public searchSongs(query: string): Observable<any> {
        return this.httpClient.get(`${environment.api}/search-songs`, {params: {query}});
    }


    constructor(private httpClient: HttpClient) {
        this.loadSongs();
    }
}
