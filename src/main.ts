import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

new SharedWorker(new URL('./app/test-worker.worker.ts', import.meta.url), {
  name: 'test-worker',
});
