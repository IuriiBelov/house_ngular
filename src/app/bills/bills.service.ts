import {Injectable} from '@angular/core';
import {Bill} from "./model/bill";
import {BillStatus} from "./model/bill-status";
import {HttpClient} from "@angular/common/http";
import {DateFormatPipe} from "./dateFormat.pipe";
import {Observable} from "rxjs";

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

  getBills(): Observable<any> {

    return this.http.get('http://localhost:8080/bills/1');
  }
}
