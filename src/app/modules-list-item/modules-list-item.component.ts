import { Component, Input } from '@angular/core';
import { CalculatorService } from '../calculator/calculator.service';
import { Module } from '../Contracts/Module';

@Component({
  selector: 'mxcd-modules-list-item',
  templateUrl: './modules-list-item.component.html',
  styleUrls: ['./modules-list-item.component.css']
})
export class ModulesListItemComponent {

  @Input() module!: Module;

  selected = false;

  constructor(private calculatorService: CalculatorService) { }

  select(): void {
    this.selected = !this.selected;

    if (! this.selected) {
      this.remove();

      return;
    }

    this.calculatorService.select(this.module);
  }
  
  remove(): void {    
    this.calculatorService.remove(this.module);
  }

}
