import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'sis-menu',
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private route: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'INICIO',
        routerLink: 'inicio',
      },
      {
        label: '¿QUIÉNES SOMOS?',
        routerLink: 'quienes-somos',
      },
      {
        label: 'PARTICIPA',
        routerLink: 'participa',
      },
      {
        label: 'AFÍLIATE',
        url: '',
        command: () => {
          window.open('https://poderinquilino.org/afiliate/', '_blank');
        },
      },
    ];
  }

  handleLogoClick() {
    this.route.navigate(['inicio']);
  }
}
