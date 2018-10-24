import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AppAppsDataSource } from './apps-list-datasource';
import { AppsService } from '../service/apps.service';

@Component({
  selector: 'apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.scss'],
})
export class AppAppsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AppAppsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'methods'];

  constructor(private _appsService : AppsService) { }

  ngOnInit() {
    this.dataSource = new AppAppsDataSource(this.paginator, this.sort)
    this.dataSource.data = this._appsService.getApps();
  }
}
