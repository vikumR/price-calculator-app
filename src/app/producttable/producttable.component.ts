import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProducttableComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;

  displayedColumns: string[] = ['cartons', 'cartonPrice', 'units', 'unitPrice'];
  @Input() dataSourceObj: any = [];

  constructor() { }

  ngOnInit(): void {
    this.dataSourceObj.paginator = this.paginator;
    this.dataSourceObj.sort = this.sort;
  }

}
