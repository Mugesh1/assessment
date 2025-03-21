import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserStore } from '../core/store/user.store';
import { SharedModule } from '../shared/shared.module';
// user.store.ts
export interface User {
  id: string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  role: string;
  token: string;
}

@Component({
  selector: 'app-user',
  imports: [CommonModule,SharedModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'userName', 'email', 'firstName', 'lastName', 'role'];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  loading$ = this.userStore.loading$;

  constructor(private userStore: UserStore) {}

  ngOnInit(): void {
    this.userStore.loadUsers();  // Load users initially

    this.userStore.users$.subscribe(users => {
      if(users){
        this.dataSource.data = users;  // Set data for the table
      }
    });

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}