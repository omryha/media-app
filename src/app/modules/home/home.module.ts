import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MediaContainerComponent } from './components/media-container/media-container.component';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { CoreModule } from 'src/app/core/core.module';
import { MediaItemDetailsComponent } from './components/media-item-details/media-item-details.component';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,
    MediaContainerComponent,
    MediaItemComponent,
    MediaItemDetailsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    FormsModule,
    PipesModule,
  ],
  exports: [MediaItemDetailsComponent],
})
export class HomeModule {}
