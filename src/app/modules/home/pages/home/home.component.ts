import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/core/services/media.service';
import { map } from 'rxjs/operators';
import { Media } from 'src/app/core/models/media.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/core/services/search.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  response$;
  categories: string[];
  categoriesFull;
  displayedMedia: Media[];
  searchQuery: string;
  filters;

  constructor(
    private mediaService: MediaService,
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.response$ = this.mediaService
      .getMedia()
      .pipe(map((res) => (this.response$ = res)))
      .subscribe((_) => {
        // Count items per category
        const counts = {};
        this.categories = this.response$.results.map(
          (item: Media) => item.Type
        );
        this.categories.forEach((type) => {
          counts[type] = counts[type] ? (counts[type] += 1) : 1;
        });
        this.categoriesFull = counts;

        // Search for media items
        this.searchService.searchQuerySubj.subscribe((searchQuery) => {
          this.searchQuery = searchQuery;
          this.displayedMedia = this.getMediaBySearch(
            this.response$.results,
            searchQuery
          );
        });

        // Manipulate (filter, order) results based on queryParams
        this.activatedRoute.queryParams.subscribe((queryParams) => {
          this.filters = {
            category: queryParams.category,
            order: queryParams.order,
          };
          this.displayedMedia = this.getFilteredByCategory(
            this.response$.results
          );
          this.displayedMedia.sort(
            this.compareValues('Title', this.filters.order)
          );
        });

        // Set default queryParams
        this.defaultRouting();
      });
  }

  // Filter items by category
  private getFilteredByCategory(media: Media[]): Media[] {
    return media.filter((item: Media) => item.Type === this.filters.category);
  }

  // Get items by query entered in search input on Header
  private getMediaBySearch(media: Media[], searchQuery: string): Media[] {
    return media.filter(
      (item: Media) =>
        item.Title.toLowerCase().includes(searchQuery) ||
        item.Year.includes(searchQuery)
    );
  }

  // Sorting items by name in ascending or descending order helper function
  private compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === 'desc' ? comparison * -1 : comparison;
    };
  }

  // Sets default queryParams for initial routing
  private defaultRouting() {
    this.route.navigate([''], {
      queryParams: {
        category: 'game',
        order: 'asc',
      },
    });
  }
}
