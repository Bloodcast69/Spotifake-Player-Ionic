import { Component, OnInit } from '@angular/core';
import {ISong} from '../player/player-page.component';
import {ApiService} from '../api.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.page.html',
  styleUrls: ['./album-info.page.scss'],
})
export class AlbumInfoPage implements OnInit {
  albumSongs: ISong[];
  activeSlideImage: ISong;
  albumName: string;

  constructor(private apiService: ApiService, private modalController: ModalController) {
    this.apiService.loadSongs();
  }

  ngOnInit() {
    this.apiService.getAlbumInfo(this.albumName).subscribe((albumSongs: ISong[]) => {
      this.albumSongs = albumSongs;
      this.activeSlideImage = albumSongs[0];
    });
  }

  closePlaylist() {
    this.modalController.dismiss({dismissed: true});
  }
}
