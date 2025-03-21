import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, delay, finalize } from 'rxjs';
import { LoaderService } from '../services/loader.service';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const router = inject(Router);
  const cookieService = inject(CookieService);
  const loaderService = inject(LoaderService);

  loaderService.show();

  if (req.url.includes('/api/login')) {
    return next(req).pipe(finalize(() => loaderService.hide()));
  }

  const token = document.cookie.split('; ').find((row) => row.startsWith('auth_token='))?.split('=')[1];

  if (token) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }

  return next(req).pipe(
    delay(1000),
    catchError((error) => {
      if (error.status === 401) {
        cookieService.delete('auth_token');
        router.navigate(['/auth/login']);
      }
      throw error;
    }),
    finalize(() => loaderService.hide())
  );
};
