import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  imports: [CommonModule,SharedModule,SidebarComponent, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  hideLayout = false;
  showSidebar = true; 
  showHeader = true;  

  ngOnInit(): void {
    this.checkAuthToken();
  }

  checkAuthToken(): void {
    const authToken = document.cookie.split(';').find((cookie) => cookie.includes('auth_token'));
    console.log(authToken)
    if (!authToken) {
      // If there's no auth token, you can hide the entire layout or navigate to login
      this.hideLayout = true;
    }
  }
}
