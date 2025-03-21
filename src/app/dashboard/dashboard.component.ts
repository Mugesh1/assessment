import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthStore } from '../core/store/auth.store';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  user$ = this.authStore.select((state) => state.user);
  
  constructor(private authStore: AuthStore) { }

}
