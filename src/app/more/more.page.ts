import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PlaylistService} from '../playlist.service';
import {ICoverImage} from '../home/home.page';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  activeSlideImage: ICoverImage;
  constructor(
      private router: Router,
      private playlistService: PlaylistService) {
    this.playlistService.currentPlayedAlbumChange().subscribe((album: any) => {
      console.log(album);
    })
    this.activeSlideImage = this.playlistService.songsList[0];

  }

  ngOnInit() {
  }

  backToMainPage() {
   this.router.navigate(['home']);
  }

}
