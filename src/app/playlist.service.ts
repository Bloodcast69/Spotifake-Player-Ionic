import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ICoverImage} from './home/home.page';

@Injectable({
    providedIn: 'root'
})
export class PlaylistService {

    public _currentPlayedAlbum: ICoverImage;
    private currentPlayedAlbum$: Subject<ICoverImage> = new Subject<ICoverImage>();

    public _songsList: ICoverImage[] = [
        {albumName: 'Unreleased1', albumArtist: 'Kanye West', coverSrc: 'assets/cover_1.png'},
        {albumName: 'Unreleased', albumArtist: 'Kanye West', coverSrc: 'assets/cover_2.png'},
        {albumName: 'Unreleased3', albumArtist: 'Kanye West', coverSrc: 'assets/cover_3.png'},
    ];
    private songsList$: Subject<ICoverImage[]> = new Subject<ICoverImage>();

    set currentPlayedAlbum(album: ICoverImage) {
        this._currentPlayedAlbum = album;
        this.currentPlayedAlbum$.next(album);
    }

    get currentPlayedAlbum() {
        return this._currentPlayedAlbum;
    }

    public currentPlayedAlbumChange(): Observable<ICoverImage> {
        return this.currentPlayedAlbum$;
    }

    set songsList(songsArray: ICoverImage[]) {
        this._songsList = songsArray;
        this.songsList$.next(songsArray);

    }

    get songsList() {
        return this._songsList;
    }

    public songsListChange(): Observable<ICoverImage[]> {
        return this.songsList$;
    }


    constructor() {
    }
}
