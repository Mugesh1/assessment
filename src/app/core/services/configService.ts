import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) {}

  async loadConfig(): Promise<void> {
    this.config = await firstValueFrom(this.http.get('/assets/config.json')); 
  }

  // Getter to expose the API URL dynamically
  get apiUrl(): string {
    return this.config?.apiUrl || 'http://localhost:3000/api'; 
  }
}
