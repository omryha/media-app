import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Media } from 'src/app/core/models/media.model';
import { MediaService } from 'src/app/core/services/media.service';
import { ViewToggleService } from 'src/app/core/services/view-toggle.service';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.scss'],
})
export class MediaItemComponent implements OnInit {
  @Input() mediaItem: Media;
  isEditable = false;
  title: string;
  initialTitle: string;
  isGridView: boolean;

  constructor(
    private viewToggleService: ViewToggleService,
    private router: Router,
    private mediaService: MediaService
  ) {}

  ngOnInit(): void {
    this.viewToggleService.isViewGridSubj.subscribe((view) => {
      this.isGridView = view;
    });

    // Pass data to media-item-details component via routing
    this.router.getCurrentNavigation()?.extras?.state;
  }

  editTitle(e) {
    this.isEditable = !this.isEditable;
    this.initialTitle = e.target.innerText;
    this.title = this.initialTitle;
  }

  submitTitle() {
    this.isEditable = false;
    if (this.initialTitle !== this.title) {
      this.mediaService.updateMediaTitle(this.mediaItem.imdbId, this.title);
    }
  }
}
