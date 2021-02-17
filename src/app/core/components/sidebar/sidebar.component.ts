import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ViewToggleService } from '../../services/view-toggle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() categories: string[];
  isViewGrid: boolean;

  constructor(private viewToggleService: ViewToggleService) {}

  ngOnInit(): void {
    this.viewToggleService.isViewGridSubj.subscribe((isViewGrid) => {
      this.isViewGrid = isViewGrid;
    });
  }

  toggleView(): void {
    this.viewToggleService.toggleView();
  }
}
