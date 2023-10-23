import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { SongDataService } from 'src/app/services/song-data.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
})
export class SongComponent implements OnInit {
  public songData!: any;
  constructor(
    private sd: SongDataService,
    private route: Router,
    private acivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.acivatedRoute.params
      .pipe(map((d) => window.history.state))
      .subscribe((data) => (this.songData = data));
    if (this.songData?.link === '') {
      this.route.navigate(['/']);
      window.alert(
        `No Song Available For Selected Album with ${this.songData.id}`
      );
    }
    // this.sd.songData.subscribe((data) => {
    //   this.songData = data;
    //   console.log(data);
    // });
  }
}
