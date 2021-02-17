import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from './pipes/pipes.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [CommonModule, RouterModule, FormsModule, PipesModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class CoreModule {}
