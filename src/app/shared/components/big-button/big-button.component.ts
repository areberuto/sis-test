import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'sis-big-button',
  imports: [CommonModule],
  templateUrl: './big-button.component.html',
  styleUrl: './big-button.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class BigButtonComponent implements AfterViewInit {
  @ViewChild('btn') btn: ElementRef<HTMLButtonElement>;

  @Input() styleClass: string;
  @Input() text: string;
  @Input() secondary: boolean;
  @Input() size: string;
  @Input() btnDisabled: boolean;

  @Output() onClick: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() {}

  // To not trigger transition when a button is secondary.
  ngAfterViewInit() {
    setTimeout(() => {
      this.btn.nativeElement.classList.add('sis-bigbutton--with-transition');
    });
  }

  handleClick(e: Event) {
    this.blur();
    this.onClick.emit(e);
  }

  blur() {
    (this.btn.nativeElement as HTMLButtonElement).blur();
  }
}
