import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AllBillsComponent }   from './all-bills/all-bills.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
    imports: [BrowserModule, FormsModule, MatTableModule, MatPaginatorModule],
    declarations: [ AllBillsComponent ],
    exports:      [ AllBillsComponent ]
})

export class BillsModule { }