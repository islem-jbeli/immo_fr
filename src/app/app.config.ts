import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';   // ✅ IMPORTANT


export const appConfig = {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule),
    provideRouter(routes),
        provideHttpClient()   // ✅ AJOUTER ÇA

  ]
};
