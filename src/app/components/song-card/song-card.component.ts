import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SongDataService } from 'src/app/services/song-data.service';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css'],
})
export class SongCardComponent implements OnInit {
  @Input() public playlistThumbnail!: string;
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public link!: string;
  @Input() public song_id!: string | number;
  constructor(private router: Router, private sd: SongDataService) {}

  ngOnInit(): void {}

  onNavigateToSong() {
    // this.sd.songData.next();
    this.router.navigateByUrl(`/song/${this.song_id}`, {
      state: {
        thumbnail: this.playlistThumbnail,
        title: this.title,
        description: this.description,
        link: this.link,
        id: this.song_id,
      },
    });
  }
}
