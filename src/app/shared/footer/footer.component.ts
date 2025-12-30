import { Component } from '@angular/core';
import { assets } from '../../core/constants/assets.const';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'caring-roots-footer',
  standalone: true,
  imports: [RouterModule, ButtonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  assetsConst = assets;
  currentYear: number = new Date().getFullYear();
}
