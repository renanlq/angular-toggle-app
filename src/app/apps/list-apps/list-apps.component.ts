import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AppAppsDataSource } from './list-apps-datasource';
import { AppsService } from '../service/apps.service';

@Component({
  selector: 'list-apps',
  templateUrl: './list-apps.component.html',
  styleUrls: ['./list-apps.component.scss'],
})
export class AppAppsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(AppsService) appsService: AppsService;
  dataSource: AppAppsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'methods'];

  ngOnInit() {
    this.dataSource = new AppAppsDataSource(this.paginator, this.sort, this.appsService);
  }
}
