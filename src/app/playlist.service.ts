import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ISong} from './home/home.page';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PlaylistService {

    public _currentPlayedAlbum: ISong;
    private currentPlayedAlbum$: Subject<ISong> = new Subject<ISong>();

    public _songsList: ISong[];
    private songsList$: Subject<any> = new Subject<any>();

    private playlistLoaded$: Subject<ISong[]> = new Subject<ISong[]>();

    set currentPlayedAlbum(album: ISong) {
        this._currentPlayedAlbum = album;
        this.currentPlayedAlbum$.next(album);
    }

    get currentPlayedAlbum() {
        return this._currentPlayedAlbum;
    }

    public currentPlayedAlbumChange(): Observable<ISong> {
        return this.currentPlayedAlbum$;
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

    public playlistLoaded(): Observable<ISong[]> {
        console.log('PLAYLIST LOADED');
        return this.playlistLoaded$;
    }

    public getSongIndex(searchSong: ISong): number {
        return this.songsList.findIndex((song) => song === searchSong);
    }

    public getNextSong(searchSong: ISong): ISong {
        const songsListLength = this.songsList.length;
        const songIndex = this.getSongIndex(searchSong);

        if (songIndex + 1 > songsListLength) {
            return this.songsList[0];
        }
        return this.songsList[songIndex + 1];
    }

    public loadPlaylist() {
        this.httpClient.get(`${environment.api}/playlist`).subscribe((playlist: ISong[]) => {
            this.songsList = playlist;
            this.playlistLoaded$.next(playlist);
        });
    }


    constructor(private httpClient: HttpClient) {
        this.loadPlaylist();
    }
}
