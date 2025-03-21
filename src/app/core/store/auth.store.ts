import { Injectable, computed, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs/operators';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { AuthService, LoginRequest, LoginResponse } from '../services/auth.service';

export interface AuthState {
  user: { id: string; email: string; userName: string } | null;
  token: string | null;
  isAuthenticated: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthStore extends ComponentStore<AuthState> {
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor(private snackbar: MatSnackBar) {
    super({ user: null, token: null, isAuthenticated: false });
    this.initializeAuthState(); // Initialize auth state on app startup
  }

  readonly user$ = this.select((state) => state.user);
  readonly isAuthenticated$ = this.select((state) => state.isAuthenticated); 
  readonly isAuthenticated = computed(() => this.get().isAuthenticated); 

  readonly login = this.effect<LoginRequest>((payload$) =>
    payload$.pipe(
      switchMap((payload: LoginRequest) =>
        this.authService.login(payload).pipe(
          tap((response: LoginResponse) => {
            document.cookie = `auth_token=${response.token}; path=/;`;
            this.patchState({
              user: response.user,
              token: response.token,
              isAuthenticated: true,
            });

            setTimeout(() => {
              this.router.navigate(['/dashboard']);
            }, 0);

            this.snackbar.openFromComponent(SnackbarComponent, {
              data: 'Login successful!',
              duration: 3000,
            });
          })
        )
      )
    )
  );

  readonly logout = this.effect<void>((trigger$) =>
    trigger$.pipe(
      tap(() => {
        document.cookie = `auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        this.router.navigate(['/auth/login']);
        this.patchState({ user: null, token: null, isAuthenticated: false });
      })
    )
  );

  // Initialize auth state from cookie on app load
  private initializeAuthState(): void {
    const token = this.getTokenFromCookie();
    if (token) {
      const user = this.getUserFromToken(token); // Decode user from token if applicable
      this.patchState({ user, token, isAuthenticated: true });
      // this.snackbar.openFromComponent(SnackbarComponent, {
      //   data: 'Session restored!',
      //   duration: 3000,
      // });
    }
  }

  private getTokenFromCookie(): string | null {
    const token = document.cookie.split('; ').find((row) => row.startsWith('auth_token='));
    return token ? token.split('=')[1] : null;
  }

  private getUserFromToken(token: string): { id: string; email: string; userName: string } | null {
    const users = [
      { id: '1', email: 'test123@gmail.com', userName: 'Test123', token: 'token123abc' },
      { id: '2', email: 'test@gmail.com', userName: 'Test', token: 'token456def' },
      { id: '3', email: 'admin@gmail.com', userName: 'Admin', token: 'token987def' },
      { id: '4', email: 'admin123@gmail.com', userName: 'Admin123', token: 'token923def' },
    ];
  
    const matchingUser = users.find((user) => user.token === token);
  
    if (matchingUser) {
      console.log('User decoded from token:', matchingUser);
      return {
        id: matchingUser.id,
        email: matchingUser.email,
        userName: matchingUser.userName,
      };
    } else {
      console.error('Token not matched to any user.');
      return null;
    }
  }
  
}
