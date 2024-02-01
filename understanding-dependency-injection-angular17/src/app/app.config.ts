import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BaseRepository } from './services/BaseRepository/BaseRepository';
import { BaseRepositoryImpl1 } from './services/BaseRepositoryImpl1/BaseRepositoryImpl1';
import { BaseRepositoryImpl2 } from './services/BaseRepositoryImpl2/BaseRepositoryImpl2';
import { BaseRepositoryImpl3 } from './services/BaseRepositoryImpl3/BaseRepositoryImpl3';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), { provide: BaseRepository, useClass: BaseRepositoryImpl3 }]
};
