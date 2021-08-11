import {Component, OnInit} from '@angular/core';
import {Flat} from "../model/flat";
import {FlatsService} from "../flats.service";

@Component({
    selector: 'flats-comp',
    templateUrl: './all-flats.component.html'
})

export class AllFlatsComponent implements OnInit {

    _flats: Flat[] = [];

    _showBillsEnable: boolean[] = [];
    _showOwnersEnable: boolean[] = [];

    _page: number = 1;
    _size: number = 10;

    constructor(private _flatsService: FlatsService) {}

    ngOnInit() {
        this._flats = this._flatsService.getAllFlats(this._page, this._size);
        this._showBillsEnable = Array(this._flats.length).fill(false);
        this._showOwnersEnable = Array(this._flats.length).fill(false);
    }

    showFlats(): void {
        this._flats = this._flatsService.getAllFlats(this._page, this._size);
        this._showBillsEnable = Array(this._flats.length).fill(false);
        this._showOwnersEnable = Array(this._flats.length).fill(false);
    }

    showBills(id: number): void {
        let idx: number = this._flats.findIndex(b => b.id === id) + 1;
        this._showBillsEnable[idx] = !this._showBillsEnable[idx];
    }

    showOwners(id: number): void {
        let idx: number = this._flats.findIndex(b => b.id === id) + 1;
        this._showOwnersEnable[idx] = !this._showOwnersEnable[idx];
    }
}