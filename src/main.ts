import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { authInterceptor } from './app/core/interceptor/auth.interceptor';
import { ConfigService } from './app/core/services/configService';

async function bootstrap() {

  bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(withInterceptors([authInterceptor])),
      provideRouter(routes), //  Register Router
      ConfigService
    ]
  }).catch(err => console.error(err));
}

bootstrap();
