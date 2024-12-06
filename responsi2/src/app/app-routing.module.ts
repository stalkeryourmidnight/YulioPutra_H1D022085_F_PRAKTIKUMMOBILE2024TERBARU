import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'add-pahlawan',
    loadChildren: () =>
      import('./add-pahlawan/add-pahlawan.module').then((m) => m.AddBookPageModule),
  },
  {
    path: 'pahlawan-detail',
    loadChildren: () =>
      import('./pahlawan-detail/pahlawan-detail.module').then(
        (m) => m.BookDetailPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'add-pahlawan',
    loadChildren: () =>
      import('./add-pahlawan/add-pahlawan.module').then((m) => m.AddBookPageModule),
  },
  {
    path: 'pahlawan-detail/:id',
    loadChildren: () =>
      import('./pahlawan-detail/pahlawan-detail.module').then(
        (m) => m.BookDetailPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
