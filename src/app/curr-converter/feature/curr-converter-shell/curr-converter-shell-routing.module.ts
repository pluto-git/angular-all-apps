import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrConverterShellComponent } from './curr-converter-shell.component';

const routes: Routes = [

  {
    path: '', component: CurrConverterShellComponent,
    children: [
      {
        path: '', loadChildren: () => import('../curr-converter/curr-converter.module').then(m => m.CurrConverterModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrConverterShellRoutingModule { }
