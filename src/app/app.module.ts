import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { SpinnerModule } from 'src/app/shared/ui/spinner/spinner.module';
import { MenuModule } from 'src/app/menu/menu.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpLoadingInterceptor } from './shared/data-access/services/loading-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MenuModule,
    SpinnerModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpLoadingInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
