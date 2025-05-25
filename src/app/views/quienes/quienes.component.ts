import { Component, ViewEncapsulation } from '@angular/core';
import { BigButtonComponent } from '../../shared/components/big-button/big-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'sis-quienes',
  imports: [BigButtonComponent],
  templateUrl: './quienes.component.html',
  styleUrl: './quienes.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class QuienesComponent {
  constructor(private route: Router) {}

  handleParticipa() {
    this.route.navigate(['/participa']);
  }

  handleAfiliate() {
    window.open('https://poderinquilino.org/afiliate/', '_blank');
  }
}
