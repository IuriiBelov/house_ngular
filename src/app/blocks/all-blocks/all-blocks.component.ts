import {Component, OnInit} from '@angular/core';

import {Block} from "../model/block";
import {BlocksService} from "../blocks.service";

@Component({
    selector: 'blocks-comp',
    templateUrl: './all-blocks.component.html'
})
export class AllBlocksComponent implements OnInit {

    _blocks: Block[] = [];

    constructor(private _blocksService: BlocksService) {}

    ngOnInit() {
        this._blocks = this._blocksService.getAllBlocks();
    }
}