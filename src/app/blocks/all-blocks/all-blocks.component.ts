import {Component, OnInit} from '@angular/core';

import {Block} from "../model/block";
import {BlocksService} from "../blocks.service";

@Component({
    selector: 'blocks-comp',
    templateUrl: './all-blocks.component.html'
})
export class AllBlocksComponent implements OnInit {

    _blocks: Block[] = [];

    _showFlatsEnable: boolean[] = [];

    constructor(private _blocksService: BlocksService) {}

    ngOnInit() {
        this._blocks = this._blocksService.getAllBlocks();
        this._showFlatsEnable = Array(this._blocks.length).fill(false);
    }

    showFlats(id: number) {
        let idx: number = this._blocks.findIndex(b => b.id === id) + 1;
        this._showFlatsEnable[idx] = !this._showFlatsEnable[idx];
    }
}