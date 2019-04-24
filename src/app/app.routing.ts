import { DinoComponent } from './components/dino/dino.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    },
    {
      path: 'dino',
      component: DinoComponent,
      pathMatch: 'full'
    }
];

  export const clientRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
