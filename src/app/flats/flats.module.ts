import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AllFlatsComponent }   from './all-flats/all-flats.component';
import { FlatBillsComponent } from './flat-bills/flat-bills.component';
import { FlatOwnersComponent } from './flat-owners/flat-owners.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AllFlatsComponent, FlatBillsComponent, FlatOwnersComponent ],
    exports:      [ AllFlatsComponent ]
})

export class FlatsModule { }