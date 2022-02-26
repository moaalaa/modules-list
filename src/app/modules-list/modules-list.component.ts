import { Component } from '@angular/core';
import { Module } from '../Contracts/Module';
import { MODULES } from '../fake_data/modules';

@Component({
  selector: 'mxcd-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.css']
})
export class ModulesListComponent {

  modules: Module[] = MODULES;

  constructor() { }

}
