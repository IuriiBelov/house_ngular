import {Component, OnInit} from '@angular/core';

import {Bill} from './model/bill';
import {BillsService} from './bills.service';

@Component({
    selector: 'bills-comp',
    templateUrl: './bills.component.html',
    providers: [BillsService]
})

export class BillsComponent implements OnInit {

    bills: Bill[] = [];
    x: number  = 10;

    constructor(private billsService: BillsService) {}

    ngOnInit() {
        this.bills = this.billsService.getBills();

        /*
        this.bills.push(new Bill(1, 1, 1, new Date(), BillStatus.Paid));
        this.bills.push(new Bill(2, 1, 2, new Date(), BillStatus.Paid));
        this.bills.push(new Bill(3, 1, 3, new Date(), BillStatus.Paid));
         */
    }
}