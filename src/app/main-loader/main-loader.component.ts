import { Component, Input } from '@angular/core';

@Component({
  selector: 'mxcd-main-loader',
  templateUrl: './main-loader.component.html',
  styleUrls: ['./main-loader.component.css']
})
export class MainLoaderComponent {

  @Input() loading = false;

  constructor() { }

}
