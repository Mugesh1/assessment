import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ItemsStore } from '../core/store/items.store';
import { SharedModule } from '../shared/shared.module';
export interface Item {
  id: string;
  itemName: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
}
@Component({
  selector: 'app-items',
  imports: [CommonModule,SharedModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'itemName', 'category', 'price', 'stock', 'rating'];
  dataSource = new MatTableDataSource<Item>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  loading$ = this.itemsStore.loading$;

  constructor(private itemsStore: ItemsStore) {}

  ngOnInit(): void {
    this.itemsStore.loadItems();  // Load items initially

    this.itemsStore.items$.subscribe(items => {
      if(items){
        this.dataSource.data = items;  // Set data for the table
      }
    });

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}