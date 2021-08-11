import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Flat} from "./model/flat";
import {Bill} from "../bills/model/bill";
import {Owner} from "../owners/model/owner";

@Injectable({
    providedIn: 'root'
})
export class FlatsService {

    constructor(private http: HttpClient){}

    getAllFlats(page: number, size: number): Flat[] {

        const url: string = "http://localhost:8080/flats?page=" + page + "&size=" + size;

        let allFlats: Flat[] = [];

        this.http
            .get<Flat[]>(url)
            .subscribe((data:Flat[]) => {
                for (const elem of data) {
                    allFlats.push(elem);
                }
            });

        return allFlats;
    }

    getFlatBills(flatId: number): Bill[] {

        const url: string = "http://localhost:8080/flats/" + flatId + "/bills";

        let bills: Bill[] = [];

        this.http
            .get<Bill[]>(url)
            .subscribe((data:Bill[]) => {
                for (const elem of data) {
                    bills.push(elem);
                }
            });

        return bills;
    }

    getFlatOwners(flatId: number): Owner[] {

        const url: string = "http://localhost:8080/flats/" + flatId + "/owners";

        let owners: Owner[] = [];

        this.http
            .get<Owner[]>(url)
            .subscribe((data:Owner[]) => {
                for (const elem of data) {
                    owners.push(elem);
                }
            });

        return owners;
    }
}
