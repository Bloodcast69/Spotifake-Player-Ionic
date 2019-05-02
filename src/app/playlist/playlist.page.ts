import { Component, OnInit } from '@angular/core';
import {ICoverImage} from '../home/home.page';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {

  activeSlideImage: ICoverImage = {albumName: 'Unreleased', albumArtist: 'Kanye West', coverSrc: 'assets/cover_1.png'};
  constructor() { }

  ngOnInit() {
  }

}
