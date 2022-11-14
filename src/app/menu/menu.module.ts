import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './ui/menu-button/button.component';
import { MenuComponent } from './feature/menu/menu.component';
import { MenuRoutingModule } from './menu-routing.module';
import { NavbarComponent } from './ui/navbar/navbar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PageNotFoundModule } from '../shared/feature/page-not-found/page-not-found.module';
import { HomeButtonModule } from './ui/home-button/home-button.module';
import { NgxScrollTopModule } from 'ngx-scrolltop';

@NgModule({
  declarations: [
    ButtonComponent,
    MenuComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    PageNotFoundModule,
    HomeButtonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    NgxScrollTopModule
  ]
})
export class MenuModule { }
