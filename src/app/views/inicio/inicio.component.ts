import { Component, ViewEncapsulation } from '@angular/core';
import { BigButtonComponent } from '../../shared/components/big-button/big-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'sis-inicio',
  imports: [BigButtonComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class InicioComponent {
  constructor(private route: Router) {}

  handleParticipa() {
    this.route.navigate(['/participa']);
  }

  handleAfiliate() {
    window.open('https://poderinquilino.org/afiliate/', '_blank');
  }
}
