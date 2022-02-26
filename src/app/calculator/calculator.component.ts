import { Component, OnInit } from '@angular/core';
import { Module } from '../Contracts/Module';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'mxcd-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  selected_modules: Module[] = [];
  hasError = false;

  constructor(public calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.selected_modules        = this.calculatorService.selected_modules;
  }

  get selected_modules_totals(): number {
    return this.calculatorService.selected_modules_totals;
  }

  sendRequest() {
    if (this.selected_modules.length <= 0) {
      this.hasError = true;
      alert(`No Modules Selected`);

      return;
    }

    this.hasError = false;

    alert(`Request was sent Successfully for MixCode with total (${this.selected_modules.length}) Module/s`);
  }
}
