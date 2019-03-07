import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss'],
})
export class DatagridComponent implements OnInit {
  @Input() devolucion: boolean;
  constructor() { }

  ngOnInit() { }

}
