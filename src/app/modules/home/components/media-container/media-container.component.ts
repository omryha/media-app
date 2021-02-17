import { Component, Input, OnInit } from '@angular/core';
import { Media } from 'src/app/core/models/media.model';
import { SearchService } from 'src/app/core/services/search.service';
import { ViewToggleService } from 'src/app/core/services/view-toggle.service';

@Component({
  selector: 'app-media-container',
  templateUrl: './media-container.component.html',
  styleUrls: ['./media-container.component.scss'],
})
export class MediaContainerComponent implements OnInit {
  @Input() mediaData: Media[];
  @Input() order: string;
  searchQuery: string;
  isGridView: boolean;

  constructor(
    private viewToggleService: ViewToggleService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.viewToggleService.isViewGridSubj.subscribe((view) => {
      this.isGridView = view;
    });
  }
}
