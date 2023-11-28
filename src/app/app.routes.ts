import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { Obra1Component } from './components/Obra1/Obra1.component';
import { Obra2Component } from './components/Obra2/Obra2.component';
import { Obra3Component } from './components/Obra3/Obra3.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Empty path for the default route
  { path: 'obra1', component: Obra1Component },
  { path: 'obra2', component: Obra2Component },
  { path: 'obra3', component: Obra3Component },
  // Add more routes as needed
];