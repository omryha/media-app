import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaItemDetailsComponent } from './components/media-item-details/media-item-details.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'item/:id',
    component: MediaItemDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
