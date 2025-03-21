import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs/operators';

export interface Item {
  id: string;
  itemName: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
}


@Injectable({
  providedIn: 'root',
})
export class ItemsStore extends ComponentStore<{ items: Item[]; loading: boolean }> {
  readonly items$ = this.select((state) => state.items);
  readonly loading$ = this.select((state) => state.loading);

  constructor(private http: HttpClient) {
    super({ items: [], loading: false });
  }

  readonly loadItems = this.effect<void>((trigger$) =>
    trigger$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        this.http.get<Item[]>('http://localhost:3000/api/items').pipe(
          tap((response) => {
            this.patchState({ items: response, loading: false }); // No need for remapping since the data already matches
          })
        )
      )
    )
  );
}
