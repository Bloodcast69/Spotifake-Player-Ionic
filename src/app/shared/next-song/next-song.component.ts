import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-next-song',
  templateUrl: './next-song.component.html',
  styleUrls: ['./next-song.component.scss'],
})
export class NextSongComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  openPlaylist() {
    this.router.navigate(['playlist']);
  }

}
