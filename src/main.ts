import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

bootstrapApplication(AppComponent, {...appConfig,
  providers: [
    ...(appConfig.providers ?? []),
    provideHttpClient(),
    MessageService
  ]
} )
  .catch((err) => console.error(err));
