import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModulesListComponent } from './modules-list/modules-list.component';
import { MainLoaderComponent } from './main-loader/main-loader.component';
import { ModulesListItemComponent } from './modules-list-item/modules-list-item.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ModulesListComponent,
    MainLoaderComponent,
    ModulesListItemComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
