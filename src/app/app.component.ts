import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'caring-roots-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule , CommonModule  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Caring Roots Website';

   scrollPercent = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const doc = document.documentElement;

    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight =
      doc.scrollHeight - doc.clientHeight;

    this.scrollPercent =
      (scrollTop / scrollHeight) * 100;
  }

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Only listen for NavigationEnd events
    ).subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }
}
