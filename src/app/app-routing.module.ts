import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'media', pathMatch: 'full' },
  {
    path: 'media',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  }, // Lazy loading for the Media module
  { path: '**', redirectTo: 'media' },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
