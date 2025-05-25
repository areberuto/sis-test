import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { MenuComponent } from './shared/components/menu/menu.component';
import { SocialBarComponent } from './shared/components/social-bar/social-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SocialBarComponent, MenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sis-front';

  constructor(private config: PrimeNG) {}

  ngOnInit() {}
}
