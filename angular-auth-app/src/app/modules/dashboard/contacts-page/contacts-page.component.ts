import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../dashboard.service';

@Component({
    selector: 'app-contacts-page',
    templateUrl: './contacts-page.component.html',
    styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent implements OnInit {
    contactsList: any[] = [];

    displayedColumns: string[] = ['index', 'name', 'title', 'email', 'mobile', 'action'];
    dataSource = new MatTableDataSource<any>(this.contactsList);

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(private _dasboardService: DashboardService) {}

    ngOnInit() {
        this.loadContactsList();
        this.dataSource.paginator = this.paginator;
    }

    loadContactsList() {
        this._dasboardService.getContactsList().subscribe((list: any) => {
            // this.contactsList =
            this.dataSource.data = list['data'];
            console.log('list', list);
        });
    }
}
