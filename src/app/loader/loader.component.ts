import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderService } from '../core/services/loader.service';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-loader',
  imports: [CommonModule,SharedModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  constructor(public loaderService: LoaderService) {}

}
