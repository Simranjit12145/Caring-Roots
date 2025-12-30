import { Component, HostListener, OnInit } from '@angular/core';
import { assets } from '../../core/constants/assets.const';
import {  Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'caring-roots-header',
  standalone: true,
  imports: [RouterModule, CommonModule, ButtonModule, OverlayBadgeModule],
  templateUrl: './header.component.html',
  providers: [DialogService],
  styleUrls: ['./header.component.scss'], // <-- fixed
})
export class HeaderComponent implements OnInit {
  assetsConst = assets;
    activeSection: string = 'home';
  isScrolled = false;
  menuOpen = false;

  @HostListener('window:scroll', [])
 onWindowScroll() {
    this.isScrolled = window.scrollY > 50;

    const sections = [
      'home',
      'services',
      'company',
      'care',
      'principals',
      'contact',
    ];

    for (let section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  
  }

    scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  onMenuClick(sectionId: string) {
  this.scrollTo(sectionId);

  // Close menu smoothly
  this.menuOpen = false;
}



}
