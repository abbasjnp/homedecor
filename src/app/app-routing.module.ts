import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const initialRoute = () => {
  return true;
};

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule', canActivate: [AuthGuardService]},
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule'},
  { path: 'cms', loadChildren: './pages/cms/cms.module#CmsModule'},
  { path: 'add-category', loadChildren: './pages/add-category/add-category.module#AddCategoryModule'},
  { path: 'users', loadChildren: './pages/users/users.module#UsersModule'},
  { path: 'orders', loadChildren: './pages/orders/orders.module#OrdersModule'}
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);