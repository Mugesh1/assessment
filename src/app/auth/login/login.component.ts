import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginRequest } from 'src/app/core/services/auth.service';
import { AuthStore } from 'src/app/core/store/auth.store';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-login',
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authStore = inject(AuthStore);

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    const credentials = this.loginForm.value as LoginRequest;
    this.authStore.login(credentials);  }
}
