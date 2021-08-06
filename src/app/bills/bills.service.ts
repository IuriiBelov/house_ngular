import {Injectable} from '@angular/core';
import {Bill} from "./model/bill";
import {BillStatus} from "./model/bill-status";
import {HttpClient} from "@angular/common/http";
import {DateFormatPipe} from "./dateFormat.pipe";

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  constructor(private http: HttpClient){
    this.http.get('http://localhost:8080/bills/1').subscribe(
        (data:any) => this._bills.push(
            new Bill(data.id, data.number, data.flatNumber, data.date, data.billStatus)));
  }

  _bills: Bill[] = [];

  getBills(): Bill[] {

    //this.bills.push(new Bill(1, 1, 1, new Date(), BillStatus.Paid));
    //this.bills.push(new Bill(2, 1, 2, new Date(), BillStatus.Paid));
    //this.bills.push(new Bill(3, 1, 3, new Date(), BillStatus.Paid));

    return this._bills;
  }
}
