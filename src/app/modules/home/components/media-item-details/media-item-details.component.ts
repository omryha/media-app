import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Media } from 'src/app/core/models/media.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-media-item-details',
  templateUrl: './media-item-details.component.html',
  styleUrls: ['./media-item-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaItemDetailsComponent implements OnInit {
  mediaItem: Media;

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.mediaItem = window.history?.state?.item;
  }

  goBack(): void {
    this.location.back();
  }
}
