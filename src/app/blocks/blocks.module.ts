import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AllBlocksComponent }   from './all-blocks/all-blocks.component';
import { BlockFlatsComponent } from './block-flats/block-flats.component';
import {RouterModule, Routes} from "@angular/router";

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule],
    declarations: [ AllBlocksComponent, BlockFlatsComponent ],
    exports:      [ AllBlocksComponent ]
})

export class BlocksModule { }