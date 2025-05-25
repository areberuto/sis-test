import { Component, ViewEncapsulation } from '@angular/core';

enum socialMedia {
  INSTAGRAM = 'https://www.instagram.com/inquilinato_sevilla/',
  TIKTOK = 'https://www.tiktok.com/@inquilinato_sevilla',
  TWITTER = 'https://x.com/inquilinatoSEV',
  TELEGRAM = 'https://t.me/sindicatodeinquilinasdesevilla',
  WHATSAPP = 'https://www.whatsapp.com/channel/0029Vb0FSfI5Ui2RoRSogy1z',
}
@Component({
  selector: 'sis-social-bar',
  imports: [],
  templateUrl: './social-bar.component.html',
  styleUrl: './social-bar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SocialBarComponent {
  socialMedia = socialMedia;

  handleSocialMedia(destiny: string) {
    if (destiny) {
      window.open(destiny, '_blank');
    }
  }
}
