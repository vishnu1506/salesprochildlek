import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'salesprochild-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public homeService: HomeService) {
  }

  ngOnInit(): void {
    this.RenderDataTable();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  RenderDataTable() {
    this.homeService.GetSampleRecords()
      .subscribe(
        res => {
          this.dataSource = new MatTableDataSource();
          this.dataSource.data = res;
          this.dataSource.paginator = this.paginator;
          console.log(this.dataSource.data);
        },
        error => {
          console.log('There was an error while retrieving data !!!' + error);
        });
  }

}
