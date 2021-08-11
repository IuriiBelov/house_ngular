import {Component, Input, OnInit} from '@angular/core';
import {Flat} from "../model/flat";
import {BlocksService} from "../../blocks/blocks.service";
import {Bill} from "../../bills/model/bill";
import {FlatsService} from "../flats.service";

@Component({
  selector: 'flat-bills-component',
  templateUrl: './flat-bills.component.html',
  styleUrls: ['./flat-bills.component.css']
})
export class FlatBillsComponent implements OnInit {

  @Input() _flatId: number;

  _bills: Bill[] = [];

  constructor(private _flatsService: FlatsService) { }

  ngOnInit(): void {
    this._bills = this._flatsService.getFlatBills(this._flatId);
  }
}
