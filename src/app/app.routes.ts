import { Routes } from '@angular/router';
import { ModalDemoComponent } from './components/Pages/modal-demo.component';
import { OffcanvasDemoComponent } from './components/Pages/offcanvas-demo.component';

export const routes: Routes = [
  {
    path: 'modal-demo',
    component: ModalDemoComponent
  },
  {
    path: 'offcanvas-demo',
    component: OffcanvasDemoComponent
  }
];
