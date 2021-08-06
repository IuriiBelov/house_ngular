import {Component, Input, OnInit} from '@angular/core';
import {Flat} from "../../flats/model/flat";
import {BlocksService} from "../blocks.service";

@Component({
  selector: 'block-flats-component',
  templateUrl: './block-flats.component.html',
  styleUrls: ['./block-flats.component.css']
})
export class BlockFlatsComponent implements OnInit {

  @Input() _blockId: number;

  _flats: Flat[] = [];

  constructor(private _blocksService: BlocksService) { }

  ngOnInit(): void {
    this._flats = this._blocksService.getBlockFlats(this._blockId);
  }
}
