import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs/operators';

export interface User {
  id: string;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserStore extends ComponentStore<{ users: User[]; loading: boolean }> {
  readonly users$ = this.select((state) => state.users);
  readonly loading$ = this.select((state) => state.loading);

  constructor(private http: HttpClient) {
    super({ users: [], loading: false });
  }

  readonly loadUsers = this.effect<void>((trigger$) =>
    trigger$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        this.http.get<User[]>('http://localhost:3000/api/users').pipe(
          tap((response) => {
            this.patchState({ users: response, loading: false }); // No need for remapping since the data already matches
          })
        )
      )
    )
  );
}
