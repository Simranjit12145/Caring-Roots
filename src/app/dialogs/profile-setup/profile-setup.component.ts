import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { assets } from '../../core/constants/assets.const';
import { ButtonModule } from 'primeng/button';
import { Checkbox } from 'primeng/checkbox';
import { IconField } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CountrySelectComponent } from '../../shared/components/country-select/country-select.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'caring-roots-profile-setup',
  standalone: true,
  imports: [IconField,RouterModule, InputIconModule, CountrySelectComponent, InputTextModule, PasswordModule, Checkbox, ButtonModule],
  templateUrl: './profile-setup.component.html',
  styleUrl: './profile-setup.component.scss'
})
export class ProfileSetupComponent {
 assetsConst = assets;
  constructor(private ref: DynamicDialogRef) { }
  closeDialog() {
    this.ref.close();
  }
}
