import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isOrderAsc: boolean; // true=ascending, false=descending
  searchQuery: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private mediaService: MediaService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe();
    this.searchService.searchQuerySubj.subscribe((searchQuery) => {
      this.searchQuery = searchQuery;
    });
  }

  toggleOrder() {
    this.isOrderAsc = !this.isOrderAsc;
  }

  refresh() {
    this.mediaService.refresh$.subscribe();
  }

  updateSearchQuery(updatedQuery: string) {
    this.searchService.updateSearchQuery(updatedQuery);
  }

  clearSearch() {
    this.searchQuery = '';
  }
}
