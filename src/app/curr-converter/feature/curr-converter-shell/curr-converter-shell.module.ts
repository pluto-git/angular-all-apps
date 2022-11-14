import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrConverterShellComponent } from './curr-converter-shell.component';
import { NavbarModule } from '../../ui/navbar/navbar.module';
import { FootbarModule } from '../../ui/footbar/footbar.module';
import { CurrConverterShellRoutingModule } from './curr-converter-shell-routing.module';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    CurrConverterShellComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    FootbarModule,
    CurrConverterShellRoutingModule
  ],
  exports: [
    CurrConverterShellComponent
  ],
  providers: [
    HttpClient
  ]
})
export class CurrConverterShellModule { }
