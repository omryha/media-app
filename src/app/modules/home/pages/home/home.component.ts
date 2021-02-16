import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  innerWidth: any;
  isMobileViewport: boolean;
  display = false;

  // Check window's width on resize
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.checkWidth(this.innerWidth);
  }

  constructor() { }

  ngOnInit(): void {
    // Check window's width
    this.innerWidth = window.innerWidth;
    this.checkWidth(this.innerWidth);
  }

  checkWidth(width: number) {
    if (this.innerWidth < 767) {
      this.isMobileViewport = true;
    } else {
      this.isMobileViewport = false;
    }
  }

  openOverlay() {
    this.display = true;
  }

  closeOverlayFunc() {
    this.display = false;
  }
}
