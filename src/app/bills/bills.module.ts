import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { BillsComponent }   from './bills.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ BillsComponent ],
    exports:      [ BillsComponent ]
})

export class BillsModule { }