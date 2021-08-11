import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';

import {Bill} from '../model/bill';
import {BillsService} from '../bills.service';
import {MatTableDataSource} from "@angular/material/table";

@Component({
    selector: 'bills-comp',
    templateUrl: './all-bills.component.html',
    providers: [BillsService]
})

export class AllBillsComponent implements AfterViewInit, OnInit {

    dataSource: MatTableDataSource<Bill>;
    constructor(private billsService: BillsService) {}

    ngOnInit() {
        this.dataSource = new MatTableDataSource<Bill>();
        this.getBills();
    }

    displayedColumns: string[] = ['billNumber', 'flatNumber', 'date', 'billStatus'];


    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    deleteBill(id: number): void {
        ;
    }
    newPage(){
       this.getBills();
    }

    getBills() {
        this.billsService.getBills().subscribe(data => {
                this.dataSource.data = data;
            },
            error => {

            })
    }
}