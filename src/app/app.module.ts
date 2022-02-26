import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModulesListComponent } from './modules-list/modules-list.component';
import { MainLoaderComponent } from './main-loader/main-loader.component';
import { ModulesListItemComponent } from './modules-list-item/modules-list-item.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    ModulesListComponent,
    MainLoaderComponent,
    ModulesListItemComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
