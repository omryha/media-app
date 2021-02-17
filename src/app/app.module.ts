import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaService } from './core/services/media.service';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { ErrorHandlingService } from './core/services/error-handling.service';
import { ToastrModule } from 'ngx-toastr';
import { ViewToggleService } from './core/services/view-toggle.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-left',
    }),
  ],
  providers: [
    MediaService,
    ErrorHandlingService,
    ViewToggleService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
