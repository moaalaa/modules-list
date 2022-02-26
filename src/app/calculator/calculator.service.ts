import { Injectable } from '@angular/core';
import { Module } from '../Contracts/Module';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  selected_modules: Module[] = [];
  selected_modules_totals: number = 0;

  constructor() { }

  select(module: Module): void {
    if (this.isSelectedBefore(module)) return;
    
    this.selected_modules.push(module);

    this.calc();
  }
  
  remove(module: Module): void {
    if (! this.isSelectedBefore(module)) return;

    const index = this.selected_modules.findIndex(m => m.id == module.id);

    this.selected_modules.splice(index, 1);

    this.calc();
  }
  
  private isSelectedBefore(module: Module): boolean {
    return (this.selected_modules.findIndex(m => m.id == module.id)) !== -1;
  }

  calc(): void {
    this.selected_modules_totals = this.selected_modules
      .map(m => m.price)
      .reduce((oldVal, newVal) => oldVal + newVal, 0);
  }

}
