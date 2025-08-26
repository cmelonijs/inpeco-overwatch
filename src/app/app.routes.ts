import { Routes } from '@angular/router';
import { Laboratories } from './pages/laboratories/laboratories';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { Laboratory } from './pages/laboratory/laboratory';
import { Layout } from './pages/layout/layout';
import { Scenario } from './pages/scenario/scenario';
import { Monitor } from './pages/monitor/monitor';

export const routes: Routes = [
  { path: '', redirectTo: 'laboratories', pathMatch: 'full' },
  { path: 'laboratories', component: Laboratories },
  { path: 'monitor', component: Monitor },
  { path: 'laboratories/:laboratoryId', component: Laboratory },
  { path: 'laboratories/:laboratoryId/layout/:layoutId', component: Layout },
  {
    path: 'laboratories/:laboratoryId/layout/:layoutId/scenario/:scenarioId',
    component: Scenario,
  },
  { path: '**', component: NotFoundPage },
];
