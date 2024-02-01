import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StudentRepositoryService } from './services/student-repository.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), StudentRepositoryService]
};
