import { Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { QuienesComponent } from './views/quienes/quienes.component';
import { ParticipaComponent } from './views/participa/participa.component';

export const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'quienes-somos',
    component: QuienesComponent,
  },
  {
    path: 'participa',
    component: ParticipaComponent,
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
];
