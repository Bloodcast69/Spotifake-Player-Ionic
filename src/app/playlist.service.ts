import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ISong} from './home/home.page';

@Injectable({
    providedIn: 'root'
})
export class PlaylistService {

    public _currentPlayedAlbum: ISong;
    private currentPlayedAlbum$: Subject<ISong> = new Subject<ISong>();

    public _songsList: ISong[] = [
        {
            albumName: 'Test Album 1',
            albumArtist: 'Test Artist 1',
            coverSrc: 'assets/cover_1.png',
            songAddress: 'assets/song1.mp3',
            songName: 'Test Song 1'
        },
        {
            albumName: 'Test Album 2',
            albumArtist: 'Test Artist 2',
            coverSrc: 'assets/cover_2.png',
            songAddress: 'assets/song2.mp3',
            songName: 'Test Song 2'
        },
        {
            albumName: 'Test Album 3',
            albumArtist: 'Test Artist 3',
            coverSrc: 'assets/cover_3.png',
            songAddress: 'assets/song3.mp3',
            songName: 'Test Song 3'
        },
    ];
    private songsList$: Subject<any> = new Subject<any>();

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


    constructor() {
    }
}
