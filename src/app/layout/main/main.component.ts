import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'caring-roots-main',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet, ToastModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
}
