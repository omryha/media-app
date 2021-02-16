import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { TimeFormatPipe } from 'src/app/shared/pipes/time-format.pipe';

import { WorkerComponent } from './worker/worker.component';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { FlightsComponent } from './flights/flights-table.component';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { HomeComponent } from './pages/home/home.component';

// PrimeNG modules
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';


@NgModule({
  declarations: [
    HomeComponent,
    WorkerComponent,
    WorkersListComponent,
    FlightsComponent,
    FlightInfoComponent,
    TimeFormatPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableModule,
    ButtonModule,
    SidebarModule
  ]
})
export class HomeModule { }
