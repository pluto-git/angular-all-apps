import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { HomeButtonComponent } from './home-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HomeButtonComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        RouterModule
    ],
    exports: [
        HomeButtonComponent
    ]
})
export class HomeButtonModule { }
