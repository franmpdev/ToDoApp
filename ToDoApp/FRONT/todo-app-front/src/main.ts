import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
bootstrapApplication(AppComponent,{
  providers:[provideHttpClient(),
    provideRouter(routes)
  ]
})
.catch((err:any) => console.error(err));
