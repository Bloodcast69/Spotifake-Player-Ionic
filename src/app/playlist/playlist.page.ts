import {Component, OnInit, ViewChild} from '@angular/core';
import {ICoverImage} from '../home/home.page';
import {Router} from '@angular/router';

interface IPlaylistSongs {
  title: string;
  duration: string;
}
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {
  activeSlideImage: ICoverImage = {albumName: 'Unreleased', albumArtist: 'Kanye West', coverSrc: 'assets/cover_1.png'};
  playlistSongs: IPlaylistSongs[] = [
    {title: 'Livin\' in A Movie', duration: '3:27'},
    {title: 'Dark Fantasy', duration: '5:12'},
    {title: 'All of the Lights', duration: '2:54'},
    {title: 'So Appalled', duration: '3:51'},
    {title: 'Devil in a New Dress', duration: '4:51'},
    {title: 'Runaway', duration: '3:46'},
    {title: 'Hell of a Life', duration: '3:09'},
    {title: 'Blame Game', duration: '7:02'},
    {title: 'Lost in the World', duration: '3:37'},
    {title: 'Who Will Survive in America', duration: '3:11'},
    {title: 'Dark Fantasy', duration: '5:12'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closePlaylist() {
    this.router.navigate(['home']);
  }

}
