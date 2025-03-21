import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, // Redirect empty path to login
  
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
      }
    ]
  },

  {
    path: '',
    component: LayoutComponent, // Common layout for dashboard and protected routes
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./user/user.component').then(m => m.UserComponent),
      },
      {
        path: 'items',
        loadComponent: () =>
          import('./items/items.component').then(m => m.ItemsComponent),
      },
    ],
  },

  { path: '**', redirectTo: 'auth/login' }, // Redirect unknown routes to login
];
