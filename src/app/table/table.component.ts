import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'kannur', weight: 179, symbol: 1258455},
  {position: 2, name: 'kasargod', weight: 426, symbol:2548787 },
  {position: 3, name: 'kozhikode', weight: 641, symbol:2578954 },
  {position: 4, name: 'malapuram', weight: 122, symbol:2548795 },
  {position: 5, name: 'kollam', weight: 811, symbol:2487519 },
  {position: 6, name: 'ekm', weight: 107, symbol:2487962 },
  {position: 7, name: 'tvm', weight: 67, symbol: 3548751},
  {position: 8, name: 'wayand', weight: 194, symbol: 1248796},
  {position: 9, name: 'alapuzha', weight: 184, symbol:4521578 },
  
];
