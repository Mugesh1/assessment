import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../store/auth.store';

export const authGuard: CanActivateFn = () => {
  const authStore = inject(AuthStore);
  const router = inject(Router);

  // Check the current authentication status using the computed signal
  if (!authStore.isAuthenticated()) {
    router.navigate(['/auth/login']);
    return false;
  }
  return true;
};
