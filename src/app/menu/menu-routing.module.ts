import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../shared/data-access/routes/routes';
import { PageNotFoundComponent } from '../shared/feature/page-not-found/page-not-found.component';
import { MenuComponent } from './feature/menu/menu.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent
  },
  {
    path: AppRoutes.todos, loadChildren: () => import('src/app/todos/todos.module').then(m => m.TodosModule)
  },
  {
    path: AppRoutes.currencyConverter, loadChildren: () => import('src/app/curr-converter/feature/curr-converter-shell/curr-converter-shell.module').then(m=>m.CurrConverterShellModule)
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
