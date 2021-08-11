import {Component, Input, OnInit} from '@angular/core';
import {Flat} from "../model/flat";
import {BlocksService} from "../../blocks/blocks.service";
import {FlatsService} from "../flats.service";
import {Owner} from "../../owners/model/owner";

@Component({
  selector: 'flat-owners-component',
  templateUrl: './flat-owners.component.html',
  styleUrls: ['./flat-owners.component.css']
})
export class FlatOwnersComponent implements OnInit {

  @Input() _flatId: number;

  _owners: Owner[] = [];

  constructor(private _flatsService: FlatsService) { }

  ngOnInit(): void {
    this._owners = this._flatsService.getFlatOwners(this._flatId);
  }
}
