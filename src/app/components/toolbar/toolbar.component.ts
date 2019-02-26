import { Component, OnInit, Input,Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() title: string;
  @Output() tittle:string;
  constructor() {
  }

  ngOnInit() { }


}
