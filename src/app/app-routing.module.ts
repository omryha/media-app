import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'workers', pathMatch: 'full' },
  { path: 'workers', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) } // Lazy load the Workers module
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
